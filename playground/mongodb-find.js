//const MongoClient = require('mongodb').MongoClient;
//ES6 object destructuring
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://@192.168.33.10:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    //mongodb returns cursor while returning results. toArray returns a promise i.e., documents
    // db.collection('Todos').find({_id: new ObjectID("58f43e65732a6a46a5472adb")}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err)=>{
    //     console.log('unable to fetch todos', err);
    // });
    
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //     console.log('unable to fetch todos', err);
    // });
    db.collection('Users').find({name:'sunil',age:33,location:'columbia'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    }, (err)=>{
        console.log('unable to fetch Users', err);
    });
    //db.close();
});
