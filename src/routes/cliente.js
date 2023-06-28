const express = require('express');

const router = express.Router();

const ClienteController = require('../controllers/clienteController');

router.post('/clientes', ClienteController.create);

module.exports = router;
