const { update } = require("lodash")
const newAuthor = require("../Models/newAuthor")
const newAuthorModel = require("../Models/newAuthor")
const newBookModel = require("../Models/newBook")
const newPublisherModel = require ("../Models/newPublisher")
const { authorName } = require("./allControllers")

//1. Write a POST api that creates an author from the details in request body

const createNewAuthor123 = async function(req, res) {
         let newAuthor123 = req.body
         let savedAuthorDetail = await newAuthorModel.create(newAuthor123)

    res.send({"new author created" : savedAuthorDetail})
}
module.exports.createNewAuthor123 = createNewAuthor123

//2. Write a POST api that creates a publisher from the details in the request body

 const createNewPublisher = async function(req, res){
     let newPublisher = req.body
     let savedPublisherDetail = await newPublisherModel.create(newPublisher)

    res.send({"new Publisher created": savedPublisherDetail})
 }
module.exports.createNewPublisher = createNewPublisher

// 3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 

const createNewBook = async function(req,res){
    let newBook = req.body 
    
    if(newBook.author_Id  ){
        
    let savedBookDetail = await newBookModel.create(newBook)
   
    res.send({"new book created":  savedBookDetail})  
    } else {
        res.send("Please enter author_Id ")
    }
}

module.exports.createNewBook = createNewBook

const getNewBooks123 = async function (req, res) {
    let allNewBooks = await newBookModel.find({gender:{Female}}).populate('newauthor')
    res.send({smg: allNewBooks})
}
module.exports.getNewBooks123=getNewBooks123
