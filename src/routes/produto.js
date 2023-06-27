const express = require('express');

const router = express.Router();

const ProdutoController = require('../controllers/produtoController');

router.get('/produtos', ProdutoController.index);

module.exports = router;
