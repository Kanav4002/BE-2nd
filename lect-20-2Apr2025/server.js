const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');
app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World! from post');
});

app.get('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World! from get');
});

app.put('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World! from post');
});

app.patch('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World! from post');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
