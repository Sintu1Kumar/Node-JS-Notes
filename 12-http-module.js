const http = require("http");
// Create a server
const server = http.createServer(function (req, res) {
  console.log(req.url);

  if (req.url === "/") {
    res.write("<h1>Welcome to our home page.</h1>");
    res.end();
    return;
  }

  if (req.url === "/about") {
    res.write("<h1>A little history about our class</h1>");
    res.end();
    return;
  }

  res.end(`<h1>Oops!</h1><p>We can't seem to find the page you are looking for...</p>
  <a href="/">Back Home </a>`);
});

// Server listening on port 5000
server.listen(5000);
