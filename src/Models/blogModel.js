const mongoose = require("mongoose")

const Objectid = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({
    title : {type : String, required : true},
    body : {type : String, required : true},
    authorId : {
        type : Objectid,
        ref : "blogAuthor",
        required : true
    },
    tags : [String],
    category : {
        type : [String],
        required : true
    },
    subcategory : {
        type : [String],
        required : true
    },
    published : {
        type : Boolean,
        default : true
    },
    publishedAt : Date,
    isDeleted : {
        default : false,
        type : Boolean
    },
    deletedAt : Date
},  { timestamps : {type :Date.UTC-8, default: new Date()} } )

module.exports= mongoose.model("blog", blogSchema)