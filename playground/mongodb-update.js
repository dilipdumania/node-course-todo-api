const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5d837885fdf7f8f448dbb6b6")
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((res) => {
    //     console.log(res);
    // }, (error) => {
    //     console.log(error);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5d83750ec499fa0db05f592c")
    },{
        $set:{
            name:'dilip'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((res) => {
        console.log(res);
    }, (error) => {
        console.log(error);
    });
    

    client.close();

});