const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/about',(req,res)=>{
    res.send('About Us');
});

app.get('*',(req,res)=>{
    res.send('404  respond when get request and rout not found');
});

app.post('/about',(req,res)=>{
    res.send('about in post methods')});

app.all('*',(req,res)=>{
    res.send('404  respond when any request and rout not found');
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});