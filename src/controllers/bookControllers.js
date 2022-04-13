const BookModel = require("../books/bookModel.js")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}
const getXINRBooks = async function(req, res){
    let inrBooks = await BookModel.find( {price : {$in:[250 ,350 ,350]  }})
        res.send({msg : inrBooks})
}

const getRandomBooks = async function(req,res){
    let randomBook = await BookModel.find({ $and :[{price : {$gt:200 },price : {$lt: 500 }  }]})
    res.send({msg:  randomBook})

}

const getParticularBooks = async function(req, res){
    let name = req.query.authorName
    let year = req.query.year
    let bookData = await BookModel.find({$or : [{authorName : name},{year : year}]})
    res.send({msg : bookData})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks
module.exports.getParticularBooks= getParticularBooks
