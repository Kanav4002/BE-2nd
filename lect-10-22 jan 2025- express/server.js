const express=require('express');
const app=express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/G24',(req,res)=>{
    // res.send('Hello G24');
    res.render('index');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});