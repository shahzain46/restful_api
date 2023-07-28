const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    username:String,
    pasword:String,
    email:String,
    phone:Number,
    gender:String
})

module.exports = mongoose.model('faculties',facultySchema)