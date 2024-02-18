const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Task Name"],
    trim: true,
    minlength: [2, "Task name can not be less then 2 characters"],
    maxlength: [20, "Task name can not be greater then 20 characters"],
  },
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
