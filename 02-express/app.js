const express = require("express");
const app = express();
let {people} = require('./data');

app.use(express.static("./methods-public"));
// for read the form data or parse form data
app.use(express.urlencoded({extended: false}));
// parse json
app.use(express.json());

// get => read only
app.get("/api/people", (req, res)=>{
  return res.status(200).json({success: true, data: people})
});

// js
app.post("/api/people", (req, res)=>{
  const {name} = req.body;
  if(!name){
    return res.send(400).json({success: false, msg: "Please provide name value"});
  }
  else{
    return res.status(201).send({success: true, person: name})
  }
});

app.post('/login', (req, res)=>{
  // console.log(req.body);
  // res.send("Post");
  const { name } = req.body; // for access the form data
  if(name){
    return res.status(200).send(`Welcome ${name}`);
  }
  else{
    res.status(401).send("Please provide credentials...");
  }
})

//* app.listen
app.listen(5000, ()=>{
  console.log("Server is listening on port 5000....")
});