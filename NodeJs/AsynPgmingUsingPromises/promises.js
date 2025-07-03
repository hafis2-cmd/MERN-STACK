const axios=require('axios');
function fetchDataFromApi(){
    return new Promise((resolve, reject) => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
             .then(Response=>resolve(Response.data))
             .catch(error=>reject(error));
    });
}

console.log("Start of the script........\n");
fetchDataFromApi()
      .then(result=>{
        console.log("API response : ");
        console.log("User ID : ",result.userId);    //just used like in api
        console.log("Title : ",result.title);
        console.log("Completed : ",result.completed);
      })
      .catch(error=>{
        console.error("Error : ",error.message);
      })
      .finally(()=>{
        console.log("\nEnd of the Script");
      });




//the api is https://jsonplaceholder.typicode.com/todos/1