const axios=require('axios');
async function fetxhDataFromApi() {
    try{
        const response=await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
        return response.data;
    }catch(err){
       throw err;
    }
}

async function main() {
    console.log('Start of the script');
    try {
        const result=await fetxhDataFromApi();
        console.log("API Responses",result);
    } catch(err){
        console.error("Error :-",error.message);
    } finally{
        console.log("End of the script");
    }
}

main();