const express = require("express");
const passport = require("passport");
const auth = require("../middleware/Auths");
const main = express.Router();
const userAuth = passport.authenticate("jwt", { session: false });
main.use("/user", require("./userRoute"));
// main.use("/blog", [userAuth, auth.useracces], require("./blogRoute"));
main.use("/blog", require("./blogRoute"));
module.exports = main;
