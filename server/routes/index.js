const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('coinprice api online');
});

module.exports = router;