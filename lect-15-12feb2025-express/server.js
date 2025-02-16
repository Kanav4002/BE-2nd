 const express = require('express');
const app = express();
const port = 3000;

// to check if the request is valid or not 
// localhost:3000/payment

const verifyotp = (req, res, next) => {
  if(req.query.otp === "1234") {
    next();
  } else {
    res.send('Invalid OTP');
  }
};

const verifyuser = (req, res, next) => {
  console.log("User verified");
}

app.use((req, res, next) => {
  console.log("G24 and middleware 1");
  next();
});

app.use('/payment', verifyotp, verifyuser,(req, res, next) => {
  console.log("payment middleware");
  next();
  // if(payment === "success") {
  //   next();
  // } else {
  //   res.send('Payment failed');
  // }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/payment', (req, res) => {
  res.send('Payment page');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

