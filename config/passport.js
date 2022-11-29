const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("../model/userModel");
require("dotenv").config();

const opt = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.secret,
};
module.exports = (passport) => {
  passport.use(
    new Strategy(opt, async (payload, done) => {
      console.log("payload :>> ", payload);
      await User.findById(payload.userid)
        .then((user) => {
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
        .catch((err) => {
          return done(null, false);
        });
    })
  );
};
