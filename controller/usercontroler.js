const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  adduser: async (req, res) => {
    
    const newUser = await userModel.create(req.body);
    res.json({
      newUser,
      message: "you are added now login",
      succes: true,
    });
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    const checkEmail = await userModel.findOne({ email });
    if (checkEmail) {
      if (checkEmail.password == password) {
        let token = jwt.sign(
          {
            userid: checkEmail._id,
            role: checkEmail.asRole,
          },
          process.env.secret,
          { expiresIn: "4h" }
        );
        res.json({
          username: checkEmail.name,
          token: `Bearer ${token}`,
          message: "your now login",
        });
      } else {
        res.json({ message: "password is not matched" });
      }
    } else {
      res.json({ message: "your not exist" });
    }
  },
};
