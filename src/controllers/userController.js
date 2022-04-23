const registrationForm = require('../Models/registrationForm')
const jwt = require ("JsonWebToken")
const { default: mongoose } = require('mongoose')


const registerUser = async function(req,res){
    let userDetail = req.body
    let savedUser = await registrationForm.create(userDetail)
    res.send({"User registered Successfully": savedUser})
}

module.exports.registerUser = registerUser
//====================================using try&catch fn=================================================
const userLogin = async function(req,res){
 
    let userName = req.body.emailId;
    let password = req.body.password;
    let getUser = await registrationForm.findOne({emailId:userName,password:password})

    try {
      if(getUser) throw "User loggin successfully";
      res.send(getUser)
      if (!getUser) throw "user does not exists";
      
    } catch (err){
       console.log(err)
      }
      finally{
        let token = jwt.sign({getUserId:getUser._id.toString(),batch:"Jolly",organisation:"LLB",},"Jolly-LLB");
        res.send({"token is": token})
     }
  
     //res.setHeader("x-auth-token", token);
}

module.exports.userLogin = userLogin


  const getRegisteredUser = async function (req, res) {
   
    let userId= req.query.userId
    let userDetails = await registrationForm.findById(userId)
    try{
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
    } catch(err){
      console.log(err)
    } finally{
    res.send({ status: true, data: userDetails });
     }
  };
  module.exports.getRegisteredUser = getRegisteredUser
      
 
 
  const updateUserData = async function (req, res) {
    
      let userId = req.query.userId;
      let user = await registrationForm.findOneAndUpdate(userId);
      try{
      if (!user) {
        return res.send("No such user exists");
                 }
      } catch(error){
        console.log(error)
           }
    finally{
      let userData = req.body;
      let updatedUser = await registrationForm.findOneAndUpdate({ _id: userId }, userData);
      res.send({ status: updatedUser, data: updateUserData });
    }
    };
    module.exports.updateUserData = updateUserData

 
 const deleteUser = async function(req,res){

            let userId = req.query.userId
            let  findUser= await registrationForm.findById(userId);
            try{
              if( !findUser )
              {
                return res.send("user not existes")
              }
              } catch(error){
              console.log(error)
                            }
                finally{
       
       let updatedUser = await registrationForm.findOneAndUpdate({_id: userId}, {isDeleted: true}, {new: true})
  
       res.send({"deleted user is": updatedUser})
    }
 }
    module.exports.deleteUser=deleteUser  
