const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: { required:true, type:String },
    authorName: String,
    price: {europeanPrice:String, indianPrice:String},
   year: {type: Number, default:2022},
    tags: [String],
    totalPages : Number,
    stochAvailable: Boolean,
    
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books