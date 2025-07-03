const express = require('express');
const app=express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Welcome to my home page');
});

app.get('/contact',(req,res)=>{
    res.send('Contact us at contact@example.com');
});

app.use((req,res)=>{
    res.status(404).send('404-page not found!');
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});