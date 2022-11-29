const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  asRole: { type: String, default: "user" },
});

module.exports = mongoose.model("userInfo", userSchema);
