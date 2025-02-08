const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/search',(req,res)=>{
    // console.log(req.query);
// let age=req.query.age;
// let name=req.query.name;
// console.log(typeof(age));
// let finalage=parseInt(age);
// console.log('Name:',name);
// console.log('Age:',age);
//fetch data and filter from database and send to client
//...................
//....................
// let count=8;

const {name,age}=req.query;
if(age===undefined){
    res.send('privide age detailes');
}
else{
    res.send('Search Results'+age);
}
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});