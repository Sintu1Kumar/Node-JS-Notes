const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
// req => middleware => res

// app.use(logger);
// app.use("/api", logger);
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

app.get("/about", (req, res) => {
  res.send("Our About page");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  // console.log(req.query);
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
