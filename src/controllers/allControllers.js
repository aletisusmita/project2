const authorModel = require("../Models/authorModel.js")
const bookModel = require("../Models/bookModel.js")

//Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)

const createNewAuthor= async function (req, res) {
    let reqAuthor= req.body
    let savedData= await authorModel.create(reqAuthor)
    res.send({"The author is added in the Database": savedData})
}


const createNewBook= async function (req, res) {
   let  reqBook = req.body;
    let allSavedBooks= await bookModel.create(reqBook)
    res.send({"The book is added in the Database": allSavedBooks})
}
//============================================================================================================================================
//List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

 const allBooks = async function(req,res) {
     let authorDetail = await authorModel.find({author_Name:"Chetan Bhagat"})
     const id = authorDetail[0].author_Id
     const booksName = await bookModel.find({author_Id:id}).select({bookName:1,_id:0})
     res.send ({"books written by Chetan Bhagat "  : booksName})
 }

//====================================================================================================================================================================

// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

const updatedBookPrice = async function(req, res){
const bookDetail= await bookModel.find({bookName:"Two States"})
const id = bookDetail[0].author_Id
 const bookName = await authorModel.find({author_Id:id}).select({author_Name:1, _id:0})
 const bkName = bookDetail[0].bookName
 const updatedPrice = await bookModel.findOneAndUpdate({bookName:bkName},{price :100},{new:true}).select({price:1,_id:0})
    res.send({smg :updatedPrice })
}

//==================================================================================================
//Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
const authorName = async function(req, res){
    let booksId = await bookModel.find({price : {$gte:100, $lte:200}}).select({author_Id:1,_Id:1})
    const id = booksId.map( inp => inp.author_Id)

    let temp = []
    for (let i = 0; i < id.length; i++) {
        let x = id[i]
        const author = await authorModel.find({author_Id:x}).select({author_Name:1,_Id:1})
        temp.push(author)     
    }
    const authorName =temp.flat()
        res.send({smg : authorName})
}




module.exports.createNewBook= createNewBook
module.exports.createNewAuthor= createNewAuthor
module.exports.allBooks= allBooks
module.exports.updatedBookPrice= updatedBookPrice
module.exports.authorName= authorName



