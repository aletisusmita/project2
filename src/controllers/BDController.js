const { get } = require('lodash')
const batchModel = require('../Models/batchModel')
const devloperModel = require('../Models/devloperModel')

//1. Write an api POST /batches that creates a batch from the details in the request body. Please note that the program should be an enum with the following allowed values only - backend and frontend

const createBatch = async function( req, res){
    let batch = req.body
    let batchData = await batchModel.create(batch)
    res.send({"new batch created" : batchData})
    

}
module.exports.createBatch = createBatch

//2. Write an api POST  /developers that creates a developer from the details in the request body. Please note that the gender should be an enum with the following allowed values - male, female and other. Also, batch attribute is a reference to the batches collection.

const createDevloper = async function (req, res){
    let devloper = req.body
    let devloperData = await devloperModel.create(devloper)
    res.send({"New Devloper created" : devloperData})
}
module.exports.createDevloper = createDevloper

//3. Write an api GET /scholarship-developers that fetches the list of eligible developers for scholarship. An eligible developer is female with percentage greater than or equal to 70

const getScholarshipDevloper = async function (req , res){
    let devloperDetail = await devloperModel.find({gender :{$in : ["Female"]},percentage : {$gte:70}}).select({name:1,_id:0,percentage:1, batch:1}).populate("batch")
    res.send({"elible candidates for Scholarship": devloperDetail})
}
module.exports.getScholarshipDevloper= getScholarshipDevloper

//4. Write an api GET /developers?percentage=value1&program=value2 that only returns the developers for a given program with a percentage greater than or equal to the received value. Please note the batch name and the program values are received in the request as query params.

const getDnPv = async function(req,res){
  const  getDetail =req.query
  const batch = await batchModel.find({name:getDetail.program})
  let x =[]
  for (let i in batch){
      const developer = await devloperModel.find({percentage:{$gte:getDetail.percentage,batch:batch[i]}}).populate("batch")
      x.push(...developer)

  }

//    const pDetail= await devloperModel.find({percentage:{$gte:getDetail.percentage}}).select({batch:1,_id:0})
//    let ID=pDetail[0].batch
//   const  getPnDData= await devloperModel.find({_id:ID,program:getDetail.program})
    res.send({smg:x}) 
}    
module.exports.getDnPv =getDnPv
