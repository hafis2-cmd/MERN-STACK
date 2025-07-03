const express = require('express');
const bodyParser=require('body-parser');
const app=express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/public/form.html');
});

app.post('/submit',(req,res)=>{
    const {username,email}=req.body;

    if(!username || !email){
        return res.status(400).send('Username and email is required.');
    }

    res.send(`Form submitted successfully! Username :${username}, Email : ${email}`);
});

app.listen(port,()=>{
    console.log(`Server is running on port no: ${port}`);
})