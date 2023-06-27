const express = require('express');

const router = express.Router();

const PedidoController = require('../controllers/pedidoController');

router.get('/pedidos', PedidoController.index);
router.get('/pedidos/:id', PedidoController.get);

module.exports = router;
