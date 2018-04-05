const express     = require('express');
const randomRoute = require('./random');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('dice roll api is online');
});

router.use('/random', randomRoute);

module.exports = router;