const fs=require('fs');
const express=require('express');
const bodyParser=require('body-parser');

const app=express();
const port=process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/createFile',(req,res)=>{
    const fileName='NodeProject.txt';
    const text=req.body.text;

    fs.writeFile(fileName,text,(err)=>{
        if(err){
            console.error('Error creating file',err);
            res.status(500).json({message: 'Internal Error'});
        }else{
            res.json({message:'File created successfully!'});
        }
    });
});

app.put('/modifyFile',(req,res)=>{
    const fileName='NodeProject.txt';
    const newText=req.body.text;

    fs.appendFile(fileName,`\n${newText}`,(err)=>{
        if(err){
            console.error('Error occured',err);
            res.status(500).json({message: 'Internal Server error'});
        }else{
            res.json({message:'Tetx added successfully!'});
        }
    });
});

app.delete('/deleteText',(req,res)=>{
    const fileName='NodeProject.txt';
    fs.truncate(fileName,0,(err)=>{
        if(err){
            console.error('Error found!');
           res.status(500).json({message: 'Internal Server error'});
        }else{
            res.json('Text deleted successfully from the file!');
        }
    });
});

app.listen(port,()=>{
    console.log(`Server is running on https://localhost:${port}`);
});


//truncate is used to delete the content.