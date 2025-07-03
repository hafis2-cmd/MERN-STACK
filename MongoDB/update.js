const {MongoClient}=require('mongodb');

//connection URI
const uri='mongodb://localhost:27017';

//Database name
const dbName='MyFirstDatabase';

//Creating a new MOngoClient
const client=new MongoClient(uri);

async function updateDocument(){
   try{
      //Connect to MongoDB serer
      await client.connect();
      console.log('Connected to MongoDB');

      //Get a reference to the database
      const db=client.db(dbName);

      //Collection Name
      const collectionName='myCollection';
      const collection=db.collection(collectionName);

      //Update  Operation
      const updateFilter={name:'Ram'};
      const updateOperation={$set:{age:35}};
      const updateResult=await collection.updateOne(updateFilter,updateOperation);  //updateMany()
      console.log(`${updateResult.modifiedCount} document(s) updated`);

   }
   finally{
    await client.close();
    console.log('Disconnect from MongoDB');
 }
}

//Call the createDocument method
updateDocument().catch(console.error);