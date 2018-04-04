const express = require('express');
const pricesRoute = express.Router();

pricesRoute.get('/', (req, res) => {
  res.send('coinprice api online');
});

module.exports = pricesRoute;