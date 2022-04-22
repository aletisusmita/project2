const productModel = require("../Models/productModel")
const userModel = require("../Models/userModel")

const header = function(req,res,next){
    let isFreeAppUser = req.headers
    if( !isFreeAppUser ){
        res.send({smg:  "header must be present for isFreeAppUser" } )
    }else{
        
        next()
    }
}
module.exports.header=header


const userValidation =  function (req,res,Next){
    let userDetail1 = req.headers
    if (userDetail1.userId) {
        let savedUserDetail = userModel.find({userId:-id})
        console.log("userId exists", savedUserDetail)
        Next()
    } else {
        res.send("userId does not exists")
    }
}
module.exports.productValidation=userValidation

const productValidation = async  function (req,res,Next){
    let productDetail1 = req.headers
    if (productDetail1.productId) {
        let savedProductDetail = await productModel.find({productId:-id})
        console.log("productId exists", savedProductDetail)
        Next()
    } else {
        res.send("productId does not exists")
    }
}
module.exports.productValidation =productValidation

const priceValidation = async function (req,res,next){
let isFreeAppUser= req.headers.isFreeAppUser
if (isFreeAppUser==true) {
    let price = await productModel.find(price).update({price:0})
    
} else {
    let price = await productModel.find(price).update({price:-100})
} next()
}
module.exports.priceValidation=priceValidation