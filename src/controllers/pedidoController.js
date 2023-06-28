const models = require('../db/models');

const {
  Pedido, Cliente, Produto, ProdutosPedidos,
} = models;

class PedidoController {
  async index(req, res) {
    const { status } = req.query;
    try {
      let pedidos;

      if (status) {
        pedidos = await Pedido.findAll({
          include: { model: Cliente, as: 'cliente' },
          where: { status },
        });
      } else {
        pedidos = await Pedido.findAll({ include: { model: Cliente, as: 'cliente' } });
      }

      return res.status(200).json(pedidos);
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Erro interno no servidor',
        message: 'Estamos com problemas no servidor',
        path: '/pedidos/',
      });
    }
  }

  async get(req, res) {
    const { id } = req.params;
    try {
      const pedido = await Pedido.findByPk(id, {
        include: [
          { model: Cliente, as: 'cliente' },
          { model: Produto, as: 'produtos' },
        ],
      });

      if (!pedido) {
        return res.status(404).json({
          status: 404,
          error: 'Id do pedido inválido ou não existe',
          message: 'Recurso não encontrado',
          path: `/pedidos/${id}`,
        });
      }

      return res.status(200).json({ pedido });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Erro interno no servidor',
        message: 'Estamos com problemas no servidor',
        path: `/pedidos/${id}`,
      });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    try {
      if (!status) {
        return res.status(400).json({
          status: 400,
          error: 'Dados inválidos',
          message: 'Status inválido',
          path: `/pedidos/${id}`,
        });
      }

      const pedido = await Pedido.update({ status }, { where: { id } });
      console.log(pedido);
      if (pedido[0] === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Id do pedido inválido ou não existe',
          message: 'Recurso não encontrado',
          path: `/pedidos/${id}`,
        });
      }

      return res.status(204).json();
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Erro interno no servidor',
        message: 'Estamos com problemas no servidor',
        path: `/pedidos/${id}`,
      });
    }
  }

  async create(req, res) {
    const {
      total, observacao, clienteId, produtos,
    } = req.body;

    try {
      if (!total && !observacao && !clienteId && !produtos) {
        return res.status(400).json({
          status: 400,
          error: 'Dados inválidos',
          message: 'Corpo da requisção inválido',
          path: '/pedidos/',
        });
      }

      const pedido = await Pedido.create({
        data: new Date(),
        status: 'pendente',
        observacao,
        clienteId,
        total,
      });

      produtos.forEach(async (produto) => {
        await ProdutosPedidos.create({
          produtoId: produto.id,
          pedidoId: pedido.id,
          quantidade: produto.quantidade,
        });
      });

      return res.status(201).json(pedido);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        status: 500,
        error: 'Erro interno no servidor',
        message: 'Estamos com problemas no servidor',
        path: '/pedidos/',
      });
    }
  }
}

module.exports = new PedidoController();
