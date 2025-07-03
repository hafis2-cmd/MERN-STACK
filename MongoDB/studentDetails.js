const {MongoClient}=require('mongodb');

//connection URI
const uri='mongodb://localhost:27017';

//Database name
const dbName='studDatabase';

const client=new MongoClient(uri);


async function createDocument(){
   try{
      //Connect to MongoDB serer
      await client.connect();
      console.log('Connected to MongoDB');

      //Get a reference to the database
      const db=client.db(dbName);

      //Collection Name
      const collectionName='students';
      const collection=db.collection(collectionName);

      //Create Operation
      const documentsToInsert=[
        {name:'Alice',age:25,city:'New York'},
        {name:'Micheal',age:22,city:'London'},
        {name:'Charlie',age:28,city:'San Francisco'},
      ];
      const insertResult=await collection.insertMany(documentsToInsert);
      console.log(`${insertResult.insertedCount} document(s) inserted suuccessfully.`);
   }
   finally{
    await client.close();
    console.log('Disconnect from MongoDB');
 }
}

//Call the createDocument method
createDocument().catch(console.error);