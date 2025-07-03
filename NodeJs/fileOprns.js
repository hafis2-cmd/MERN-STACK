//creating a file

const fs=require('fs');
const filePath='example.txt';

const contentToWrite='Hello, This is my content for the file';
fs.writeFile(filePath,contentToWrite,(err)=>{
    if(err){
        console.error('Error writing to file:-',err);
    }else{
        console.log('File write operation successful');
        fs.readFile(filePath,'utf8',(readErr,data)=>{
           if(readErr){
            console.error('Error reading file:-',readErr);
           }else{
            console.log('File content:- ',data);
           }
        });
    }
});