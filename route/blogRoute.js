const express = require("express");
const blogController = require("../controller/blogcontroller");
const blogRouter = express.Router();
blogRouter.post("/add", blogController.addblog);
blogRouter.get("/list", blogController.bloglist);
blogRouter.get("/getbyid", blogController.getBlogById);

module.exports = blogRouter;
