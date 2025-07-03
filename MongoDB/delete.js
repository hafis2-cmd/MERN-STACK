const {MongoClient}=require('mongodb');

//connection URI
const uri='mongodb://localhost:27017';

//Database name
const dbName='MyFirstDatabase';

//Creating a new MOngoClient
const client=new MongoClient(uri);

async function deleteDocument(){
   try{
      //Connect to MongoDB serer
      await client.connect();
      console.log('Connected to MongoDB');

      //Get a reference to the database
      const db=client.db(dbName);

      //Collection Name
      const collectionName='myCollection';
      const collection=db.collection(collectionName);

      //delete  Operation
      const deleteFilter={city:'Navi Mumbai'};
      const deleteResult=await collection.deleteOne(deleteFilter);     //deleteMany()
      console.log(`${deleteResult.deletedCount} document(s) deleted`);
     
      //displaying the document(s) after deletion
      const remainingDocuments=await collection.find().toArray();
      console.log('Documents in my collection: ');
      console.log(remainingDocuments);

   }
   finally{
    await client.close();
    console.log('Disconnect from MongoDB');
 }
}

//Call the createDocument method
deleteDocument().catch(console.error);