const middleware1 = function (req,res,next){
    let date = new Date
    let ip = req.ip
    let url= req.url
        console.log(date,ip,url)
    next()
}

const middleware2 = function(req,res,next){
    let date = new Date
    let ip = req.ip
    let url= req.url
        console.log(date,ip,url)
    next()
}
const middleware3 = function(req,res,next){
    let date = new Date
    let ip = req.ip
    let url= req.url
        console.log(date,ip,url)   
         next()
}

const middleware4 = function(req,res,next){
    let date = new Date
    let ip = req.ip
    let url= req.url
        console.log(date,ip,url) 
           next()
}
const middleware5 = function(req,res,next){
    let date = new Date
    let ip = req.ip
    let url= req.url
        console.log(date,ip,url) 
           next()
}

module.exports.middleware1=middleware1

module.exports.middleware2=middleware2

module.exports.middleware3=middleware3

module.exports.middleware4=middleware4

module.exports.middleware5=middleware5