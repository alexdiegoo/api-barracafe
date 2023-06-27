const models = require('../db/models');

const { Pedido } = models;

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
}

module.exports = new PedidoController();
