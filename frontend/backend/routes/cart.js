
const express = require('express');
const router = express.Router();

let cart = [];

router.post('/', (req, res) => {
  const { productId, quantity } = req.body;
  cart.push({ productId, quantity });
  res.json({ message: '加入購物車成功！' });
});

module.exports = router;
