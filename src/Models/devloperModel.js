const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId;

const devloperSchema = new mongoose.Schema({
    name : String,
    gender :{type:String, enum : ["Male","Female","Other"]},
    percentage : Number,
    batch : {type:ObjectId, ref: "Batch"}
}, {timestamps : true});

module.exports = mongoose.model('Devloper', devloperSchema)