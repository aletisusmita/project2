const express = require ("express");
const router = express.Router();
const jwt = require("jsonwebtoken")

const authorController = require("../controllers/authorController")
const blogController = require ("../controllers/blogController")
const middleware = require("../middlewares/auth")
//===========================================Phase-1============================================================

router.post("/createAuthor", authorController.createAuthor)

// router.post("/createBlog",  blogController.createBlog)
// router.get("/getBlogs", blogController.getBlogs)
// router.put("/updateBlog/:blogId", blogController.updateBlog)
// router.delete("/deleteBlog/:blogId",blogController.deleteBlog)
// router.delete("/deleteQuery", blogController.deleteQuery)


//================================================Phase-2=========================================================

router.post("/login",authorController.login)

router.post("/createBlog", middleware.authenticate, blogController.createBlog)
router.get("/getBlogs",middleware.authenticate, blogController.getBlogs)
router.put("/updateBlog/:blogId",middleware.authenticate, middleware.authorise, blogController.updateBlog)
router.delete("/deleteBlog/:blogId",middleware.authenticate, middleware.authorise, blogController.deleteBlog)
router.delete("/deleteQuery", middleware.authenticate, middleware.authorise, blogController.deleteQuery)



module.exports=router 