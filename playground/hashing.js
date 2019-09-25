const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log('Hash : ', hash);
//     });
// });

var hashPass = '$2a$10$7Krn0Or0iHUEnygyhUA1TOI36b4m6KvqLBUV/wcIhH8n4f21pRjNO';

bcrypt.compare(password, hashPass, (err, res) => {
    console.log(res);
});

// var data = {
//     id: 10
// }

// var token = jwt.sign(data, 'dilip123');
// var decoded = jwt.verify(token, 'dilip123');

// console.log(`Token : ${token}`);
// console.log('tring decoded :', decoded);

// var message = 'I am user number 4';

// var hash = SHA256(message).toString();

// console.log(`Message : ${message}`);
// console.log(`Hash Message : ${hash}`);

