const models = require('../db/models');

const { Pedido, Cliente, Produto } = models;

class PedidoController {
  async index(req, res) {
    try {
      const pedidos = await Pedido.findAll();

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
}

module.exports = new PedidoController();
