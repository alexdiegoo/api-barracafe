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

  async create(req, res) {
    try {
      const {
        nome, imagem, descricao, preco, categoria,
      } = req.body;

      if (!nome || !imagem || !descricao || !preco || !categoria) {
        return res.status(400).json({
          status: 400,
          error: 'Dados inválidos',
          message: 'Um ou mais campos estão inválidos',
          path: '/produtos',
        });
      }

      const produto = await Produto.create({
        nome, imagem_link: imagem, descricao, preco, categoria,
      });

      return res.status(201).json(produto);
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Erro interno no servidor',
        message: 'Estamos com problemas no servidor',
        path: '/produtos',
      });
    }
  }

  async update(req, res) {
    const { id } = req.params;

    try {
      const {
        nome, imagem_link, descricao, preco, categoria,
      } = req.body;

      if (!nome && !imagem_link && !descricao && !preco && !categoria) {
        return res.status(400).json({
          status: 400,
          error: 'Dados inválidos',
          message: 'Um ou mais campos estão inválidos',
          path: `/produtos/${id}`,
        });
      }

      const produto = await Produto.update(req.body, {
        where: { id },
      });

      if (produto[0] === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Id do produto inválido ou não existe',
          message: 'Recurso não encontrado',
          path: `/produtos/${id}`,
        });
      }

      return res.status(204).json();
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Erro interno no servidor',
        message: 'Estamos com problemas no servidor',
        path: `/produtos/${id}`,
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const produto = await Produto.destroy({ where: { id } });

      if (produto === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Id do produto inválido ou não existe',
          message: 'Recurso não encontrado',
          path: `/produtos/${id}`,
        });
      }

      return res.status(204).json();
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Erro interno no servidor',
        message: 'Estamos com problemas no servidor',
        path: `/produtos/${id}`,
      });
    }
  }
}

module.exports = new ProdutoController();
