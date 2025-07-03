const {MongoClient}=require('mongodb');

//connection URI
const uri='mongodb://localhost:27017';

//Database name
const client=new MongoClient(uri);

async function createDocument(){
   try{
      //Connect to MongoDB serer
      await client.connect();
      console.log('Connected to MongoDB');

      //Get a reference to the database
      const db=client.db('MyFirstDatabase');

      //Collection Name
      const collectionName='myCollection';
      const collection=db.collection(collectionName);

      //Create Operation
      const documentToInsert={name:'Raj Kumar',age:30,city:'New York'};
      const insertResult=await collection.insertOne(documentToInsert);
      console.log(`Document inserted with _id: ${insertResult.insertedId}`);
   }
   finally{
    await client.close();
    console.log('Disconnect from MongoDB');
 }
}

//Call the createDocument method
createDocument().catch(console.error);