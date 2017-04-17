//const MongoClient = require('mongodb').MongoClient;
//ES6 object destructuring
const {MongoClient,ObjectID} = require('mongodb');

// //How to use mangodb id generation outside of it
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://@192.168.33.10:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').insertOne({text:'Something to do',completed:false},(err, result)=>
    // {
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    //Insert new doc into Users collection (name, age, location)
    // db.collection('Users').insertOne({name:'sunil',age:33,location:'columbia'},(err, result)=>
    // {
    //     if(err){
    //         return console.log('Unable to insert Users',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    db.close();
});
