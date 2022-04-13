const bookModel = require("../books/bookModel.js")
const BookModel = require("../books/bookModel.js")

//createBook : to create a new entry..use this api to create 11+ entries in your collection
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({"The book is added in the Database": savedData})
}


//bookList : gives all the books- their bookName and authorName only 

const getBooksList= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({"All books are": allBooks})
}

//getBooksInYear: takes year as input in post request and gives list of all books published that year

 const getBooksInYear = async function(req,res) {
     yr=req.body.year
     let booksInYear = await bookModel.find(yr).select({bookName:1,_id:0})
     res.send ({"books printed in Year" : booksInYear})
 }

//====================================================================================================================================================================

//  getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
// e.g if body had { name: “hi”} then you would fetch the books with this name
// if body had { year: 2020} then you would fetch the books in this year
// hence the condition will differ based on what you input in the request body

const getParticularBooks = async function(req, res){
    let condition = req.body
    let particularBooks= await BookModel.find({$condition:condition})
//    let  Name = req.body.authorName
//   let  yr = req.body.year;
//     let particularBooks = await BookModel.find({$or:[{authorName: Name },{year : yr}]})
    res.send({"particular books are" : particularBooks})
}

//==================================================================================================
//getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 

const getXINRBooks = async function(req, res){
    let inrBooks = await BookModel.find( {'price.indianPrice' : {$in:["100INR","200INR" ,"500INR"]  }})
        res.send({"Books available in Indian price are" : inrBooks})
}

//===============================================================================================================

//getRandomBooks - returns books that are available in stock or have more than 500 pages 



const getRandomBooks = async function(req,res){
    let randomBook = await BookModel.find({ $or :[{stockAvailable:true },{totalpages: {$gt:500}}  ]})
    res.send({"Books available are":  randomBook})

}



module.exports.createBook= createBook
module.exports.getBooksList= getBooksList
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks
module.exports.getParticularBooks= getParticularBooks
module.exports.getBooksInYear= getBooksInYear
