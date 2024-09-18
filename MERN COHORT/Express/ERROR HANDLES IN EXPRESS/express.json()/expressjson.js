//Express json function
const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

app.post("/",function(req,res){
  console.log(req.body.name);
  res.end();
});

app.listen(port,(err) => {
  if(err) console.log(err);
  console.log("server listerning on port",port)
})