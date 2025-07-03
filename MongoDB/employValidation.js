const {MongoClient}=require('mongodb');

async function createCollectionWithValidation(){
    const uri='mongodb://localhost:27017';

    const dbName='EmpDatabase';

    const client=new MongoClient(uri);
    try{
        await client.connect();
       console.log('Connected to MongoDB');

       const db=client.db(dbName);
       const collectionName='employees';

       const collectionExists=await db.listCollections({name:collectionName}).hasNext();

       if(!collectionExists){
        const validationRules={
        validator:{
            $jsonSchema: {        //$jsonSchema operator is used to define JSON schema validation.
                bsonType:'object',//specifies that documents in the collection must be of BSON type 'object',
                                  // indicating that they are expected to be JSON-like documents.
                required: ['name','age','city'],  // specifies that each document must have these fields.if any 
                                                  //are missing ,the document will not pass validation.
                properties:{
                    name:{bsonType:'string'},  // name must of type string
                    age:{bsonType:'int',minimum:18}, //age must of type in and should be atleast 18
                    city:{bsonType:'string'},
                }
            }
        }
       };
       await db.createCollection(collectionName,validationRules);
       console.log(`collection ${collectionName} have created with validation rules`);
    }else{
        console.log(`collection '${collectionName}' already exists.`);
    }
       
       //inserting a document into the collection.
       const result=await db.collection(collectionName).insertOne({
        name:'Hafis Mohammed',
        age:22,
        city:'Manjeri'
       });

       console.log(`document inserted with _id: ${result.insertedId}`);
    }finally{
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

createCollectionWithValidation().catch(console.error);