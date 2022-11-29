const express = require("express");
require("./config/db");
const cors = require('cors');
const { google, outlook, office365, yahoo, ics } = require('calendar-link');
const passport = require("passport");
require("./config/passport")(passport);
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
app.use(cors())
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/",async(req,res)=>{
  const event = {
    title: "My birthday party",
    description: "Be there!",
    start: "2000-04-30 18:00:00 +0100",
    duration: [3, "hour"],
  };
  const google1=google(event)

  res.redirect(google1)
})

app.use("/api", require("./route/index"));
app.listen(4006, () => {
  console.log("Server is started");
});
