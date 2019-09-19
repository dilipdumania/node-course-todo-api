const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Todos');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })


    db.collection('Users').insertOne({
        name:'dilip dumania',
        age: 25,
        location: 'Ahmedabad'
    }, (error, res) => {
        if(error){
            return console.log('Unable to add record');
        }
        console.log(JSON.stringify(res.ops, undefined, 2));
    });

    client.close();
});