const express = require("express");

const app = express();

const port = 3000;
const path = require('path');

app.use('/file',express.static(path.join(__dirname,'image.png')))

/*app.use(express.json());

app.post('/',function(req,res){
  const{name} = req.body;
  res.send(`welcome ${name}`)
}) */


/*app.get("/hello",function(req,res){
  res.set('content-Type','text/html');
  res.status(200).send("<h1>Hello GFG Leaners!</h1>");
}) */


/*app.get('/',function(req,res){
      res.status(200);
      res.send("welcome to root URL OF server : ");
}) */ 

app.listen(port,(error) =>{
  if(!error){
    console.log("server is successfully Running and app is listering on port ",+port) 
  } else{
    console.log("error occured,server can't start",error);
  }
});