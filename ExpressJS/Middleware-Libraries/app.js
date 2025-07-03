const express = require('express');
const bodyParser = require('body-parser');
//body-parse is used to parse the request body,enabling handling of JSON and form data.
const morgan=require('morgan');
//morgan is a logging middleware that Logs HTTP requests to the console.
const cookieParser=require('cookie-parser');
//cookie-parser parses cookies from incoming requests  and makes them available in req.cookies.
const session=require('express-session');
//express-session enables session management for user-specific data storage b/w requests.
const cors=require('cors');
//cors handles Cross-Origin Resource sharing,allowing or restricting cross-origin HTTP requests.(already running msg)
const helmet=require('helmet');
//helmet enhances security by setting various HTTP headers.
const compression=require('compression');
//compression adds gzip compression to responses, reducing data sizes for improved performances.
 

const app=express();
const port=3000;

//middleware: body-parser.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(cookieParser());

app.use(session({secret:'your-secret-key', resave: true, saveUninitialized:true}));

app.use(cors());

app.use(helmet());

app.use(compression());

app.get('/',(req,res)=>{
    res.send('Hello, Express with middleware');
});

app.listen(port,()=>{
    console.log(`Server is running in port no:${port}`);
});