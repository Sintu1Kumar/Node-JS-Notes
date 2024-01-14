const http = require("http");
const {readFileSync} = require('fs');

const homePage = readFileSync('./navbar/index.html');
const homeStyles = readFileSync('./navbar/style.css');
const homeLogic = readFileSync('./navbar/script.js');
const homeLogo = readFileSync('./navbar/logo.svg');

const server = http.createServer((req, res) => {
  const url = req.url;

  // Home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
    return;
  }

  // About page
  if (url === "/about.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
    return;
  }

  // Style
  if (url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
    return;
  }

  // JS
  if (url === "/script.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
    return;
  }

  // Logo
  if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeLogo);
    res.end();
    return;
  }

  // 404 resource not found
  else{
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(5000);
