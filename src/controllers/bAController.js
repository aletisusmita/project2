// const mongoose = require('mongoose')
// const express = require('express')
const authorModel = require("../Models/authorModel")
const blogModel = require("../Models/blogModel")

const createAuthor = async function (req, res) {
    try {

        let authorDetail = req.body
        let savedAuthor = await authorModel.create(authorDetail)
        res.send({ data: savedAuthor })
    }
    catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}
module.exports.createAuthor = createAuthor



const createBlog = async function (req, res) {
    try {
        let data = req.body;

        if (Object.keys(data).length != 0) {

            let authorId = req.body.authorId

            if (!authorId) res.send({ msg: "Author Id is required" });

            let id = await authorModel.findById(authorId);

            if (!id) res.status(401).send({ msg: "Invalid author id" });

            let savedData = await blogModel.create(data);

            res.status(201).send({ msg: savedData });

        } else res.status(400).send({ msg: "BAD REQUEST" });

    } catch (err) {

        console.log("This is the error :", err.message);

        res.status(500).send({ msg: "Error", error: err.message });
    }
};
module.exports.createBlog = createBlog;

//GET /blogs
// Returns all blogs in the collection that aren't deleted and are published
// Return the HTTP status 200 if any documents are found. The response structure should be like this
// If no documents are found then return an HTTP status 404 with a response like this
// Filter blogs list by applying filters. Query param can have any combination of below filters.
// By author Id
// By category
// List of blogs that have a specific tag
// List of blogs that have a specific subcategory example of a query url: blogs?filtername=filtervalue&f2=fv2

// const getPublishedBlog = async function(req,res){
//     try {
        
//         let publishedC = await blogModel.find(req.query)
//         if(!publishedC){
       
//         res.status(404).send({publishedC})
//         }else{ 
//            res.status(200).send({publishedC})
//         }
//     } catch (error) {
//         console.log(error)
//         res.send({error:error.message})
//     }
// }


const getPublishedBlog = async function (req, res) {
    try{
      
      data = req.query
      
      if(Object.keys(data) == 0){return res.status(404).send({status : false, msg: "Fill details"})}
  
      const blogs = await blogModel.find({$and: [data, {isDeleted: false}, {isPublished: true}]})
  
      if (blogs.length == 0){return res.status(404).send({status: false, msg : "no blogs"})}
  
      return res.status(200).send({status: true, data: blogs})
  
    } catch(err) {
  
      res.send({status: false, err: err.message})
      
    }
  }

module.exports.getPublishedBlog = getPublishedBlog


// PUT /blogs/:blogId
// Updates a blog by changing the its title, body, adding tags, adding a subcategory. (Assuming tag and subcategory received in body is need to be added)
// Updates a blog by changing its publish status i.e. adds publishedAt date and set published to true
// Check if the blogId exists (must have isDeleted false). If it doesn't, return an HTTP status 404 with a response body like this
// Return an HTTP status 200 if updated successfully with a body like this
// Also make sure in the response you return the updated blog document.


const updateBlog = async function(req,res)
{
    try{
        let blogId = req.params.blogId
        let Details = await blogModel.find({_id:blogId,isDeleted:false})
        if(!Details.length)
        return res.status(400).send({status:false,msg:"Data is incorrect"})
        // res.send({data:Details})
     
        let {title, body, tags, subcategory} = req.body
        let newBlog = await blogModel.findOneAndUpdate({Details},{$push:{subcategory : subcategory, tags:tags},title:title,body:body,isPublished:true,publishedAt: Date.now()}, {new:true}).populate("authorId")
        res.status(200).send({status:true,data:newBlog})
    }
    catch(err){
        console.log(err.message)
        res.status(500).send({error:err.message})
    }
}

module.exports.updateBlog = updateBlog






// DELETE /blogs/:blogId
// Check if the blogId exists( and is not deleted). If it does, mark it deleted and return an HTTP status 200 without any response body.
// If the blog document doesn't exist then return an HTTP status of 404 with a body like this

const deleteBlog = async function(req,res)
{
    try{
        let blogId = req.params.blogId

        let deleteData = await blogModel.findById({_id:blogId})
        if(!deleteData)
        return res.status(404).send({msg:"incorrect data"})

        if(deleteData.isDeleted == true)
        return res.status(404).send({msg:"user already deleted"})
        // res.status(200).send({msg:deleteData})

        let updateDelete = await blogModel.findOneAndUpdate({_id:blogId},{isDeleted:true, deletedAt:Date.now()},{new:true})
        if(updateDelete)
        res.status(200).send({status: true, data: updateDelete})     
    }
    catch(err){
        console.log(err.message)
        res.status(500).send({error:err.message})
    }  
}

module.exports.deleteBlog = deleteBlog;

// DELETE /blogs?queryParams
// Delete blog documents by category, authorid, tag name, subcategory name, unpublished
// If the blog document doesn't exist then return an HTTP status of 404 with a body like this

const  deleteBlogparams = async function(req,res){
    try{
        let paramBlogData = req.query;
    
        if(Object.keys(paramBlogData) !=0){
            let blogParams = await blogModel.find(paramBlogData)
            if(!blogParams) {
                return res.send({status: false, message: "no such blog exists"})
            }
            let deleteBlog = await blogModel.findOneAndUpdate({paramBlogData: blogParams}, {isDeleted: true}, {new: true})
            res.send({status: true, data: deleteBlog})
        }
        else{
            res.status(400).send({msg:"bad requuest"})
        }
    }
    catch(err){
        console.log(err.massage)
        res.status(500).send({msg:"error",error:err.massage})
    }
}

module.exports.deleteBlogparams = deleteBlogparams
