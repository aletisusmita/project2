
const jwt = require("jsonwebtoken")

const authenticationMw = function(req,res,next ) {

    let token = req.headers["x-Auth-token"];
    try{
      if (!token) token = req.headers["x-auth-token"];
    
      if (!token) return res.send({ status: false, msg: "token must be present" });
    
      console.log(token);
       
     
      let decodedToken = jwt.verify(token, "Jolly-LLB");
      if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" })
      next()
    } catch(error){
      console.log(error)
    }
}

module.exports.authenticationMw = authenticationMw