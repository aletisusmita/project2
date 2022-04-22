const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId

const orderSchema = new mongoose.Schema({
    userId: {type:ObjectId, ref : 'User'},
	productId: { type : ObjectId , ref : 'Product'},
	amount: Number,
	isFreeAppUser: {type: Boolean, default: true}, 
	date: {type:String, default:"21/10/2021"}  
}, {timestamps: true })

module.exports = mongoose.model("Order", orderSchema)//orders