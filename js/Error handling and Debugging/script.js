document.addEventListener('DOMContentLoaded',function(){
    //function error
    function divideNumbers(a,b){
        if(b==0){
            throw new Error('Division by zero is not allowed');
        }
        return a/b;
    }
    try{
        const result=divideNumbers(10,0);
        console.log("Result is" +result);
    } catch(error){
        console.error("Error :-",error.message);
    }

    function fetchData(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject(new Error('Failed to fetch data'));
            },2000);
        });
    }

    //Asynch fetch error handling
    fetchData()
         .then(data=>console.log("Data",data))
         .catch(error=>console.error("Error",error.message))

    //Reference Error
    try{
        console.log(undefinedVariable);
    }     
    catch(error){
        console.error("Reference Error",error.message)
    }
});