const express = require('express');
const router = express.Router();


const authenticationMw = require("../middlewares/authentication") 

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

const cowinController = require("../controllers/cowinController")

router.get("/getDistrictVaccination", cowinController.getDistrictVaccination)

 router.get("/allMemes",cowinController.allMemes)

 router.get("/getWeatherbyLocation",cowinController.getWeatherbyLocation)
 router.post("/pickMemeIdPostReq",cowinController.pickMemeIdPostReq)

module.exports = router;