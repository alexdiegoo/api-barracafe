const models = require('../db/models');

const { Cliente } = models;

class ClienteController {
  async create(req, res) {
    const { nome } = req.body;
    try {
      if (!nome) {
        return res.status(400).json({
          status: 400,
          error: 'Dados inválidos',
          message: 'Status inválido',
          path: '/clientes/',
        });
      }

      const cliente = await Cliente.create({ nome });

      return res.status(201).json(cliente);
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Erro interno no servidor',
        message: 'Estamos com problemas no servidor',
        path: '/clientes/',
      });
    }
  }
}

module.exports = new ClienteController();
