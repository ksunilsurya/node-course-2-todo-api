//const MongoClient = require('mongodb').MongoClient;
//ES6 object destructuring
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://@192.168.33.10:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // //FindOneAndUpdate
    // db.collection('Todos').findOneAndUpdate(
    //     {_id:new ObjectID('58f529855b5c933b7f1294e2')},
    //     {$set: {completed: true}},
    //     {returnOriginal: false}
    // ).then((result)=>{
    //     console.log(result);
    // });

    //FindOneAndUpdate
    db.collection('Users').findOneAndUpdate(
        {name:'GouthamiK'},
        {$set: {name: 'GouthamiK'}, $inc:{age:1}},
        {returnOriginal: false}
    ).then((result)=>{
        console.log(result);
    });

    //db.close();
});

