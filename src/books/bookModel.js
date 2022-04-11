const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
   categary: String,
    emailId: String,
    year: Number,
    
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books