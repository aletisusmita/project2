const orderModel = require('../Models/orderModel')
const productModel = require('../Models/productModel')
const userModel = require('../Models/userModel')

//Write a POST api to create a product from the product details in request body.

const createProduct = async function (req,res){
    let productDetail = req.body
    let savedProduct = await productModel.create(productDetail)
    res.send({"Product added in list": savedProduct})
}
module.exports.createProduct = createProduct

//Write a POST api to create a user that takes user details from the request body.
// If the header isFreeAppUser is not present terminate the request response cycle with an error message that the request is missing a mandatory header
 const createUser = async function(req,res){
    
     var isFreeApp= req.header['isFreeAppUser']
     
        let userDetail = req.headers
        let userdetails  = await userModel.create(userDetail)
        res.send({"user created" : userdetails})
         
     

 }

 module.exports.createUser = createUser


 const purchaseProduct = async function(req,res){
     let data= req.headers
     let savedProduct1 = await productModel.create(data)
     res.send({"Purchased Product ": savedProduct1})
    }
    module.exports.purchaseProduct=purchaseProduct
    