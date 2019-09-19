const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({_id: new ObjectID('5d8359056d4e0a0440a222f7')}).toArray().then((doc) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(doc, undefined, 2));
    // }, (err) => {
    //     console.log('Error while fetching data');
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);

    // }, (err) => {
    //     console.log('Error while fetching data');
    // });

    db.collection('Users').find({name:'dilip'}).toArray().then((doc) => {
        console.log('Todos');
        console.log(JSON.stringify(doc, undefined, 2));
    }, (err) => {
        console.log('Error while fetching data');
    });

    // client.close();

});