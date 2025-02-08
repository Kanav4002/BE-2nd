const express=require('express');
const app=express();

 //middlware to serve static files
// app.use(express.static('public')); 
app.use('/static',express.static('public'));
// app.use('/static',express.static('assets'));



app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.get('/about',(req,res)=>{
    res.send('About Page');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});