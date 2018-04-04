const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = process.env.port || 5000;



app.use('/api', routes);

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

