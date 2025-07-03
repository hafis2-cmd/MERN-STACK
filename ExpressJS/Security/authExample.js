const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const path=require('path');

const app=express();
const port = 3000;

//body-parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//express session middleware
app.use(session({
    secret:'your-secret-key',
    resave:true,
    saveUninitialized:true
}));

app.set('view engine','hbs');     //in which engine this running.

//custom authentication middleware
const authenticate=(req,res,next)=>{
    if(req.session && req.session.user){
        return next();
    }else{
        return res.status(401).send('Unauthorized');
    }
};

//Routes

//Login route
app.post('/login',(req,res)=>{
    const {username,password}=req.body;

    if(username==='user' && password==='password'){
        req.session.user=username;
        res.send('Login successful.');
    }else{
        res.status(401).send('Invalid username or password');
    }
});

//logout route
app.get('/logout',(req,res)=>{
   req.session.destroy();
   res.send('Logout successfully.');
});

//dashboard route
app.get('/dashboard', authenticate,(req,res)=>{
    res.send(`Welcome to the dashboard, ${req.session.user}!`);
});

//server listening
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});