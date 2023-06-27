const express = require('express');

const router = express.Router();

const ProdutoController = require('../controllers/produtoController');

router.get('/produtos', ProdutoController.index);
router.get('/produtos/:id', ProdutoController.get);

router.post('/produtos', ProdutoController.create);

module.exports = router;
