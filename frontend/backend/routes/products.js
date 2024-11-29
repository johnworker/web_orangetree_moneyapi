
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
  const products = [
    { id: 1, name: '橘子', price: 50 },
    { id: 2, name: '蘋果', price: 30 },
  ];
  res.json(products);
});

module.exports = router;
