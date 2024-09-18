const express = require("express");

const app = express();

app.get("/",function(req,res){
  res.send("this is get request!!\n")
});

app.put("/",function(req,res){
  res.send("this is put request!!\n");
})

app.post("/",function(req,res){
  res.send("this is post request!!\n");
})

app.delete("/",function(req,res){
  res.send("this is delete request!!\n")
})

app.listen(3000);
