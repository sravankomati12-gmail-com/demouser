const blogModel = require("../model/blogModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  addblog: async (req, res) => {
    const newblog = await blogModel.create(req.body);
    res.json({
      newblog,
      message: "blog is inserted",
      succes: true,
    });
  },
  bloglist: async (req, res) => {
    const list = await blogModel.find();
    res.json({ message: "list of blog", list });
  },
  getBlogById: async (req, res) => {
    const list = await blogModel.find({ _id: req.query.id });
    res.json({ message: "list of blog", list });
  },
};
