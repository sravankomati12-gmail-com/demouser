module.exports = {
  useracces: async (req, res, next) => {
    if (req.path == "/add") {
      if (req.user.asRole == "admin") {
        next();
      } else {
        res.json({ message: "not accessable" });
      }
    } else {
      next();
    }
  },
};
