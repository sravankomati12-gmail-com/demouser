const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sravan_vision:sravan@cluster0.vr3xu.mongodb.net/auth1?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", function (error) {
  console.log(error);
});

mongoose.connection.on("open", function () {
  console.log("Connected to MongoDB database.");
});
