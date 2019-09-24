const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5dd84cf0f27e0d41efca85886';

// if(!ObjectID.isValid(id)){
//     console.log('Id not vaild');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todo :', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo :', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//        return console.log('Id not found');
//     }
//     console.log('Todo :', todo);
// }).catch((e) => console.log(e));

var id = '51d849d246b53b73f98420f43';

// User.find({
//     _id: id
// }).then((users) => {
//     console.log('find User: ',users);
// }, (e) => {
//     console.log(e);
// });


// User.findOne({
//     _id: id
// }).then((user) => {
//     console.log('findOne User: ',user);
// }, (e) => {
//     console.log(e);
// });


User.findById(id).then((user) => {
    if(!user){
        return console.log('Unable to found');
    }
    console.log('findById User: ',user);
}, (e) => {
    console.log(e);
});