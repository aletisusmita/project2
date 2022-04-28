const express = require('express');
const router = express.Router();


const bAController = require("../controllers/bAController")

router.post("/author", bAController.createAuthor)

router.post("/createBlog", bAController.createBlog)
router.get("/getPublishedBlog",bAController.getPublishedBlog)

router.delete("/blogs/:blogId",bAController.deleteBlog)

router.delete("/deleteBlogparams",bAController.deleteBlogparams)
 
module.exports = router;