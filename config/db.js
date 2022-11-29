const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/auth1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", function (error) {
  console.log(error);
});

mongoose.connection.on("open", function () {
  console.log("Connected to MongoDB database.");
});
