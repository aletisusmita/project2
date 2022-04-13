const express = require('express');
const router = express.Router();
const BookModel= require("../books/bookModel")
const BookControllers= require("../controllers/bookControllers")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookControllers.createBook  )

router.get("/getBooksData", BookControllers.getBooksData)

router.get("/getParticularBooks", BookControllers.getParticularBooks)

router.get("/getRandomBooks", BookControllers.getRandomBooks)

router.get("/getXINRBooks", BookControllers.getXINRBooks)


module.exports = router;