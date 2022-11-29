const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  tittle: String,
  description: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "userInfo" },
});

module.exports = mongoose.model("Bloginfo", userSchema);
