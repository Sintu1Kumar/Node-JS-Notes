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
  const singleProduct = products.find((product) => product.id === req.params.productID);

  if(!singleProduct){
    return res.status(404).send("product does not exist");
  }

  return res.json(singleProduct);
});

app.get("/api/products/:prouctID/reviews/:reviewID", (req, res)=>{
  console.log(req.params);
  res.send("reviews")
});

app.get('/api/v1/query', (req, res)=>{
  const {search, limit }= req.query;
  const sortedProducts = [...products];

  if(search){
    sortedProducts = sortedProducts.filter((product)=>{
      return product.name.startsWith(search);
    })
  }
  if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if(sortedProducts.length < 1){
    return res.status(200).json({success: true, data: []});
  }

  res.json(sortedProducts);
});

//* app.listen
app.listen(5000, ()=>{
  console.log("Server is listening on port 5000....")
});