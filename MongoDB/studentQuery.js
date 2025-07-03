const {MongoClient}=require('mongodb');

const uri='mongodb://localhost:27017';

const dbName='studDatabase';

const client=new MongoClient(uri);


async function queryDocument(){
   try{
       await client.connect();
       console.log('Connected to MongoDB');

       const db=client.db(dbName);

       const collectionName='students';
       const collection=db.collection(collectionName);

       const checkQuery=await collection.find({city:'New York'}).toArray();
       console.group('Details for city: New York');
       console.log(checkQuery);

       const lessThanQuery=await collection.find({age:{$lt:25}}).toArray();   //$lte: means less than or equal to
       console.group('Details of students of age less than 25');
       console.log(lessThanQuery);

       const greaterThanQuery=await collection.find({age:{$gt:25}}).toArray();   //$gte: means greater than or equal to
       console.group('Details of students of age greater than 25');
       console.log(greaterThanQuery);

       const inArrayQuery=await collection.find({hobbies:{$in:['Reading','Coding']}}).toArray();   
       console.group('Documents with hobbies - "Reading" and "Coding"');
       console.log(inArrayQuery);

       const regexQuery=await collection.find({name:/^A/}).toArray();      //  /^A/ means name starting with letter A
       console.group('Details of students whose name starts with letter A');
       console.log(regexQuery);
    }
   finally{
    await client.close();
    console.log('Disconnect from MongoDB');
 }
}

queryDocument().catch(console.error);