const express = require("express");
const app = express();
const tasks = require("./routes/tasks")

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) =>{
    res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

// app.get("/api/v1/tasks")     // get all the task
// app.get("/api/v1/tasks")     // create a new task
// app.get("/api/v1/tasks")     // get single task
// app.get("/api/v1/tasks")     // update task
// app.get("/api/v1/tasks")     // delete task


const port = 3000;
app.listen(port, console.log(`Server is listening on ${port}`));