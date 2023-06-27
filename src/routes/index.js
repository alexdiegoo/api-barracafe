const express = require('express');

const router = express.Router();
const produto = require('./produto');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Initial setup',
  });
});

router.use(produto);

module.exports = router;
