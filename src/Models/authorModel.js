const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_Id:Number,
    author_Name:String,
    age: Number,
    address:String

})

module.exports = mongoose.model('author', authorSchema) //authors