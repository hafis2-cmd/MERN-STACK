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

//set handlebars(hbs) as a view engine
app.set('view engine','hbs');     //in which engine this running.
app.set('views',path.join(__dirname,'views'));

app.use(express.static('public'));

//custom authentication middleware
const authenticate=(req,res,next)=>{
    if(req.session && req.session.user){
        return next();
    }else{
        return  res.redirect('/login');
    }
};

//Routes

//empty array
let todos=[];

//Home route
app.get('/',authenticate,(req,res)=>{
    res.render('index',{user: req.session.user, todos});
});

//Login route
app.get('/login',(req,res)=>{
    res.render('login');
});

app.post('/login',(req,res)=>{
    const {username, password}=req.body;

    if(username ==='user' && password==='password'){
        req.session.user=username;
        res.redirect('/');
    }else{
        res.render('login',{error:'Invalid username or password.'});
    }
});

//logout route
app.get('/logout',(req,res)=>{
   req.session.destroy();
   res.redirect('/login');
});

//todos application
app.post('/add',(req,res)=>{
    const {todo}=req.body;
    todos.push({text:todo,done:false});        //false means it is not completed.
    res.redirect('/');
});

//mark my Todo as done route.
app.get('/done/:index',authenticate,(req,res)=>{
    const index=parseInt(req.params.index, 10);
    if(!isNaN(index) && index>=0 && index< todos.length){
        todos[index].done=true;
    }
    res.redirect('/');
});

//server listening
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});