const http = require('http');
const url = require('url');

//creating server
const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    res.writeHead(200,{'Content-Type': 'text/plain'});

    if(req.method==='GET'){
        res.write('This is a GET request!\n');
        res.write(`Path:${parsedUrl.pathname}\n`);
        res.write(`Query params: ${JSON.stringify(parsedUrl.query)}\n`);
    }else if(req.method==='POST'){
        let data ='';
        req.on('data',chunk =>{
            data+=chunk;
        });
        req.on('end',()=>{
            setTimeout(()=>{
                res.write('This is a POST request!\n');
                res.write(`Path:${parsedUrl.pathname}\n`);
                res.write(`Recent data ${data}\n`);

                res.end();
            },1000);
        });
    }else{
        res.writeHead(405,{'Content-Type':'text/plain'});
        res.write('Method not allowed\n');
    }
    res.end();
});
const port=3000;
server.listen(port,()=>{
    console.log(`Server listeing on port ${port}`);
});