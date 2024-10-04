
const db = require('../config/db');

const {Schema} = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        required : true,
        unique : true
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = db.model('user',userSchema);

module.exports = UserModel;