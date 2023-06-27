const models = require('../db/models');

const { Produto } = models;

class ProdutoController {
  async index(req, res) {
    try {
      const produtos = await Produto.findAll();
      return res.status(200).json(produtos);
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Erro interno no servidor',
        message: 'Estamos com problemas no servidor',
        path: '/produtos',
      });
    }
  }

  async get(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);

      if (!produto) {
        return res.status(404).json({
          status: 404,
          error: 'Id do produto inválido ou não existe',
          message: 'Recurso não encontrado',
          path: `produtos/${req.params.id}`,
        });
      }

      return res.status(200).json({ produto });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Erro interno no servidor',
        message: 'Estamos com problemas no servidor',
        path: `produtos/${req.params.id}`,
      });
    }
  }
}

module.exports = new ProdutoController();
