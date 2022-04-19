const express = require('express');
const router = express.Router();
//const BookModel= require("../Models/bookModel")
const allControllers= require("../controllers/newControllers")
const BDController = require("../controllers/BDController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createNewAuthor", allControllers.createNewAuthor  )

// router.post("/createNewBook", allControllers.createNewBook)

// router.get("/allBooks", allControllers.allBooks)

// router.get("/updatedBookPrice", allControllers.updatedBookPrice)

// router.get("/authorName", allControllers.authorName)

// router.post("/createNewAuthor1", newController.creatNewAuthor)


const newController = require("../controllers/newControllers")


router.post("/createNewBook", newController.createNewBook)
router.post("/createNewAuthor123", newController.createNewAuthor123)
router.post("/createNewPublisher",newController.createNewPublisher)


router.get("/getNewBooks123", newController.getNewBooks123)


router.post("/createBatch", BDController.createBatch)
router.post("/createDevloper", BDController.createDevloper)
router.get("/getScholarshipDevloper", BDController.getScholarshipDevloper)
router.get("/getDnPv", BDController.getDnPv)

module.exports = router;