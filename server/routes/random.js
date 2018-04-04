const express = require('express');
const randomController = require('./../controllers/random');
const randomRoute = express.Router();

randomRoute.get('/', (req, res) => {
  res.send({value: randomController.getRandomNumber(10)});
});

randomRoute.get('/dice', (req, res) => {
  res.send({value: randomController.getRandomDiceRoll()});
});

randomRoute.get('/:maxValue', (req, res) => {
  const maxValue = req.params.maxValue;

  res.send({value: randomController.getRandomNumber(maxValue)});
});

module.exports = randomRoute;