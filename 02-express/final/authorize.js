const authorize = (req, res, next) => {
  const userObj = req.query;
  const user = userObj.user;

  if (user === "rahul") {
    req.user = { name: "rahul", id: 300 };
    next();
  } else {
    res.send(401).send("Unauthorized");
  }
};

module.exports = authorize;
