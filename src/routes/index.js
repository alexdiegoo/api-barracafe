const express = require('express');

const router = express.Router();
const produto = require('./produto');
const pedido = require('./pedido');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Initial setup',
  });
});

router.use(produto);
router.use(pedido);

module.exports = router;
