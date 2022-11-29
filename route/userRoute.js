const express = require("express");
const userController = require("../controller/usercontroler");
const userRouter = express.Router();
userRouter.post("/add", userController.adduser);
userRouter.post("/login", userController.loginUser);

module.exports = userRouter;
