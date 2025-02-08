const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true})); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
   res.render('index')
});

app.get('/user', (req, res) => {
    console.log(req.query);
    console.log('User route and get method');
    // res.render(succesful.ejs);
    res.send('User route and get method');
})

app.post('/user', (req, res) => {
    console.log(req.body);
    console.log('User route and post method');
    // res.render(succesful.ejs);
    res.send('User route and post method');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});