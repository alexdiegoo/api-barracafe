const models = require('../db/models');

const { Produto } = models;

class ProdutoController {
  async index(req, res) {
    try {
      const produtos = await Produto.findAll();
      return res.json(produtos);
    } catch (err) {
      return res.json({
        status: 500,
        error: 'Erro interno no servidor',
        message: 'Estamos com problemas no servidor',
        path: '/produtos',
      });
    }
  }
}

module.exports = new ProdutoController();
