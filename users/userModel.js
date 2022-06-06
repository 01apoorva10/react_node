// schema for user registration
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    username : String ,
    email : String,
    password: String
    //userType : String 
})

module.exports = mongoose.model('User', userSchema)