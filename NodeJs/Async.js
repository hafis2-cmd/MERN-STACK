//function to stimulate an asynchronous operations.
function performAsyncOperation(value,callback){
    setTimeout(function(){
        const result=value*2;
        callback(null,result);
    },2000);
}

console.log("Start of the script");
performAsyncOperation(5,function(error,result){
    if(error){
        console.error("Error :"+error);
    }else{
        console.log("Result of the asynchronous operation is "+result);
    }
});

console.log("End of the script");