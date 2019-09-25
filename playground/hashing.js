const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
}

var token = jwt.sign(data, 'dilip123');
var decoded = jwt.verify(token, 'dilip123');

console.log(`Token : ${token}`);
console.log('tring decoded :', decoded);

// var message = 'I am user number 4';

// var hash = SHA256(message).toString();

// console.log(`Message : ${message}`);
// console.log(`Hash Message : ${hash}`);

