const mongoose = require('mongoose');
const validator = require('validator'); 
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 1,
        validate: {
            validator: validator.isEmail, 
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    tokens:[{
        access:{
            type: String,
            required: true
        },
        token:{
            type: String,
            required: true
        }
    }]

});

UserSchema.methods.toJSON = function() {
    var user = this;
    var userObj = user.toObject();
    return _.pick(userObj, ['_id', 'email']);
}

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(),access}, 'dilip@123').toString();

    user.tokens = user.tokens.concat([{access, token}]);
   
    return user.save().then(() => {
        return token;
    });
};

UserSchema.statics.authenticate = function (token) {
    var User = this;
    var decoded;

    try {
        decoded = jwt.verify(token, 'dilip@123');

    } catch (e) {
        return Promise.reject();
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};
 