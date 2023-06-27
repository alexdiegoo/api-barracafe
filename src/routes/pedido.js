const express = require('express');

const router = express.Router();

const PedidoController = require('../controllers/pedidoController');

router.get('/pedidos', PedidoController.index);

module.exports = router;
