const mongoose = require('mongoose')

const registrationForm = new mongoose.Schema({
    firstName : String,
    lastName : String,
    mobile : Number,
    emailId : String,
    password : String,
    gender : String,
	isDeleted: {type: Boolean,default: false}, //default value is false 
    age : Number,
}, {timestamps:true})
 module.exports= mongoose.model("Registered User", registrationForm)