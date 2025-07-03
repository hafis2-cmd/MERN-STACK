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
      const documentsToInsert=[
        {name:'Rahul',age:32,city:'Kolkata'},
        {name:'Ram',age:33,city:'Navi Mumbai'},
        {name:'Shyam',age:34,city:'Kolkata'},
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