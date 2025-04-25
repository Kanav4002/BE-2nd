const fs = require('fs');
const path = require('path');
const express = require('express');
const { log } = require('console');
const port = 3000;  
const app = express();

// console.log(__filename);
// console.log(path.join('aniket', 'kanav', 'isha', 'kannan'));

app.get('/readfile/:filename', (req, res) => {
  console.log(req.params.filename);
  const pathOfFile = path.join(__dirname, req.params.filename + '.txt');
  console.log(pathOfFile);
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

