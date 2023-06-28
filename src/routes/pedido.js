const express = require('express');

const router = express.Router();

const PedidoController = require('../controllers/pedidoController');

router.get('/pedidos', PedidoController.index);
router.get('/pedidos/:id', PedidoController.get);
router.put('/pedidos/:id', PedidoController.update);
router.post('/pedidos', PedidoController.create);

module.exports = router;
