const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));

app.use((req, res, next) => {
  const logDetails = JSON.stringify({
    timestamp: new Date().toISOString(),
    ip: req.ip,
    url: req.originalUrl,
    protocol: req.protocol,
    method: req.method,
    hostname: req.hostname
  }) + '\n';

  fs.appendFile(path.join(__dirname, 'requests.log'), logDetails, err => {
    if (err) console.error('Error logging request:', err);
  });

  next();
});

app.get('/', (req, res) => res.send('Request details are being logged.'));