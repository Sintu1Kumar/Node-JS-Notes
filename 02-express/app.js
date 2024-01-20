const express = require("express");
const {products} = require('./data');
const app = express();

app.get('/', (req, res)=>{
  res.send('<h2>Home Page</h2> <a href="/api/products">products<a/>');
  // res.json([{user:"sintu"},{user:"vivek"}]);
});

app.get('/api/products', (req, res)=>{
  res.json(products);
});

app.get('/api/products/:productID', (req, res)=>{
  console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find((product) => product.id == req.params.productID);

  res.json(singleProduct);
});

//* app.listen
app.listen(5000, ()=>{
  console.log("Server is listening on port 5000....")
});