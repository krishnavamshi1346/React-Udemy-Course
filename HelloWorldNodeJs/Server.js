const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('Hello World from node js using express')
});
app.get('/services',(req,res)=>{
    res.send('This is Services Page');
});
app.listen(5000,()=>{
    console.log('Server started on Port  ');
});