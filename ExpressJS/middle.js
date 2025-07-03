const express = require('express');
const app=express();
const port=3000;

//middleware 1
app.use((req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();          //next is a functn used to pass the controll to next middleware functn in the stack.
});

//middleware 2
app.use((req,res,next)=>{
    return res.status(503).send('Service temporarily unavailable.Please try again later.');
    next();
});

app.get('/',(req,res)=>{
    res.send('Welcome to my website!');
});

app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
});

