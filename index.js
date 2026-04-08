// code for running a simple server on port 3000

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about', (req, res) => {
  res.send('About Page - This is a simple Express server.');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
