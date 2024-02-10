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

// post method which will insert the data
app.post("/api/people", (req, res)=>{
  const {name} = req.body;
  if(!name){
    return res.send(400).json({success: false, msg: "Please provide name value"});
  }
  else{
    return res.status(201).json({success: true, data: [...people, {name: Sintu}]})
  }
});

//* put method
app.put("/api/people/:id", (req, res) =>{
  const { id } = req.params;
  const { name } = req.body;
  // res.send({id: id, name: name});
  const person = people.find((person)=>{
    return person.id === Number(id);
  })
  if(!person){
    return res.status(404).json({success: false, msg:`no person with the id ${id}`})
  }
  const newPeople = people.map((person))
})

app.post('/login', (req, res)=>{
  // console.log(req.body);
  // res.send("Post");
  const { name } = req.body; // for access the form data
  if(name){
    return res.status(400).send(`Welcome ${name}`);
  }
  else{
    res.status(401).send("Please provide credentials...");
  }
})
