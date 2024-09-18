const express = require('express');

const app = express();

app.get('/health-checkup',function(req,res){
    res.send("your heart is healthy")

    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "harkirat" && password!= "pass"){
    res.status(403).json({
        msg : "user doesn't exits"
    });
    return;
    }

    if(kidneyId != 1 || kidneyId != 2){
        res.status(411).json({
       msg : " wrong Input",
        });
        return;
    }
    res.send({
        msg:"your heart is healthy",
    });
});
app.listen(3000);