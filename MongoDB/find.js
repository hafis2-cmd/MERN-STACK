const {MongoClient}=require('mongodb');

//connection URI
const uri='mongodb://localhost:27017';

//Database name
const dbName='MyFirstDatabase';

//Creating a new MOngoClient
const client=new MongoClient(uri);

async function findDocument(){
   try{
      //Connect to MongoDB serer
      await client.connect();
      console.log('Connected to MongoDB');

      //Get a reference to the database
      const db=client.db(dbName);

      //Collection Name
      const collectionName='myCollection';
      const collection=db.collection(collectionName);

      //Read  Operation
    //   const readResult=await collection.find().toArray();
    //   console.log('Document in the collection ');
    //   console.log(readResult);
         const query={city:"Kolkata"};
         const readResult=await collection.find(query).toArray();

         if(readResult.length>0){
            console.log('Document(s) found in the collection');
            console.log(readResult);
         }else{
            console.log('Document not found');    // to find one specific entry.
         }
   }
   finally{
    await client.close();
    console.log('Disconnect from MongoDB');
 }
}

//Call the createDocument method
findDocument().catch(console.error);