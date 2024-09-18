//Express.raw()

const express = require('express')
const app = express();

const port = 3000;

//app.use(express.raw());

app.post("/",function(req,res){
  console.log(req.body);
  res.end();
});

app.listen(port,(err) => {
  if(err) console.log(err)
  console.log("server is running op port",port)
});
