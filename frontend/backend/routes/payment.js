
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { cart } = req.body;
  res.json({ message: '訂單提交成功！', cart });
});

module.exports = router;
