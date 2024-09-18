const express = require('express');

const app = express();

app.get("/",function(req,res){
    res.send("this is a get request!!\n")
});

app.post("/",function(req,res){
    res.send("this is a post request!!\n");
});

app.put("/",function(req,res){
    res.send("this is a put request!!\n");
});

app.delete("/hey",function(){
    res.send("this is a delete request!!\n");
});

app.listen(3000);