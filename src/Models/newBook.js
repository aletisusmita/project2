const mongoose = require ('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

 const newBookSchema = new mongoose.Schema({
	bookName:String,
		author_Id : {
            type:ObjectId,
            ref: "newAuthor"
        },
	price:Number,
	ratings:Number,
		publisher_Id :{
            type : ObjectId,
            ref : "newPublisher"
        }


 },{ timestamps: true});

 module.exports= mongoose.model('newBook',newBookSchema) // newbooks