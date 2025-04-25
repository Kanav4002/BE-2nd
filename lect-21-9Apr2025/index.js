const express = require('express');
const app = express();

// catch all the exceptions
// error handling middleware
// app.get(/.*/, (req, res, next) => {
//   const error = new Error('Endpoint not found');
//   error.status = 404;
//   return next(error);
//   // res.send('Hello World!');
// });

app.get('*', (req, res, next) => {
  const error = new Error('Endpoint not found');
  error.status = 404;
  return next(error);
  // res.send('Hello World!');
});

app.use((err, req, res, next) => {
  res.status(err.status).json({success: false, message: err.message});
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
