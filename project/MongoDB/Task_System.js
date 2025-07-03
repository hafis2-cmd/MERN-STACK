//creating a task managing system
const {MongoClient}=require('mongodb');

async function TaskManagementSystem() {
    const uri='mongodb://localhost:27017';
    const dbName='TaskDatabase';
    const client=new MongoClient(uri);

    try{
       await client.connect();
       console.log('Connected to MongoDB');

       const db=client.db(dbName);
       const collectionName='MyTasks';

       const collectionExists=await db.listCollections({name:collectionName}).hasNext();
       if(!collectionExists){
        const validationRules={
        validator:{
            $jsonSchema: {        
                bsonType:'object',                                  
                required: ['title','description','status','priority'],                                                    
                    properties:{
                    title:{bsonType:'string'},  
                    description:{bsonType:'string'}, 
                    status:{enum:['pending','completed']},
                    priority:{bsonType:'int',minimum:1}
                }
            }
        },
        validationAction:'error'
       };
       await db.createCollection(collectionName,validationRules);
       console.log(`Collection ${collectionName} created successfully`);
    }else{
        console.log('Collection already exists');
    }

    const taskToInsert=[
        {
            title:'Complete Project 1',
            description:'Finish the coding project by the end of this week',
            status:'pending',
            priority:1
        },
        {
            title:'Complete Project 2',
            description:'Finish the coding project documentation',
            status:'completed',
            priority:2
        },
        {
            title:'Complete Project 3',
            description:'Started testing stage.',
            status:'pending',
            priority:3
        }
    ];
    
    // const insertResult=await db.collection(collectionName).insertMany(taskToInsert);
    // console.log(`Inserted ${insertResult.insertedCount} documents with IDs`,insertResult.insertedIds);

    const query={
        status: {$in:['pending','completed']},
        priority:{$lte:2}
    };

    const filteredTask=await db.collection(collectionName).find(query).toArray();
    console.log('Filtered task',filteredTask);
 
    //updating the dicument
    const updateResult=await db.collection(collectionName).updateOne(
        {title:'Complete Project 1'},
        {$set:{status:'completed'}}
    );
    // console.log(`Task updated: ${updateResult.modifiedCount} document(s)`);

    //read updated task
    const findUpdatedResult=await db.collection(collectionName).findOne({title:'Complete Project 1'});
    console.log('Updated task fetched : ',findUpdatedResult);

    //delete document
    const deleteResult=await db.collection(collectionName).deleteOne({title:'Complete Project 3'});
    console.log(`Task Deleted : ${deleteResult.deletedCount} document(s)`);

}finally{
    await client.close();
    console.log('Disconnected from MongoDB');
 }
}

TaskManagementSystem().catch(console.error);