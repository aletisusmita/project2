const express = require('express');
const router = express.Router();

const authenticationMw = require("../middlewares/authentication") 

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



const userController = require('../controllers/userController')
router.post("/userRegistrationForm",userController.registerUser)
router.post("/user/login",userController.userLogin)

router.get("/getRegisteredUser",userController.getRegisteredUser)

router.put("/updateUserData",userController.updateUserData)

router.delete("/isDeleted",userController.deleteUser)

// authentication mw c================================================================
router.post("/userRegistrationForm",userController.registerUser)
router.post("/user/login",userController.userLogin)

router.get("/getRegisteredUserMW",authenticationMw.authenticationMw,userController.getRegisteredUser)

router.put("/updateUserDataMW",authenticationMw.authenticationMw,userController.updateUserData)

router.delete("/isDeletedMW",authenticationMw.authenticationMw,userController.deleteUser)
module.exports = router;