const mongoose = require("mongoose");

const connectionString = "";

const connectDB = (url) => {
  mongoose.connect(connectionString);
};

module.exports = connectDB;
