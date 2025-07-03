const express = require('express');
const app=express();
const port = 3000;

app.set('view engine','ejs');

const students=[
    {name: 'John',age: 20},
    {name: 'Bob',age: 22},
    {name: 'Charlie',age: 23},
];

app.get('/',(req,res)=>{
    res.render('index',{students});
});

app.listen(port,()=>{
    console.log('listening on port' +port);
});