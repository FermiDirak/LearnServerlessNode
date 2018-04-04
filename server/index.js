const express    = require('express');
const bodyParser = require('body-parser')
const path       = require('path');

const routes = require('./routes');

const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', routes);

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});