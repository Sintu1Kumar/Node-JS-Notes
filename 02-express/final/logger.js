//* req => middleware => res
const logger = (req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getHours() +":"+ new Date().getMinutes() +":"+ new Date().getSeconds();
  
    // res.send("Done");
    console.log(method, url, time);
    next();
  };

 module.exports = logger;