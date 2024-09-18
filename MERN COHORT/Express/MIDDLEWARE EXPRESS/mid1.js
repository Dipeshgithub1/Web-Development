const express = require('express');

const app = express();

function userMiddleWare(req,res,next){
    if(username !='harkirat' && password != 'pass'){
        res.status(403).json({
            msg :"incorrect inputs"
        });
    } else{
       next();
    }
};


function kidneyMiddleWare(req,res,next){
    if(kidneyId != 1 && kidneyId != 2 ){
        res.status(403).json({
            msg : "Incorrect inputs"
        });
    } else{
        next();
    }
};

app.get("/health-checkup",userMiddleWare,kidneyMiddleWare,function(req,res){

res.send("your health is healthy")

});

app.get("/kidney-checkup",userMiddleWare,kidneyMiddleWare,function(req,res){
    res.send("your kidney is good")
});

app.listen(3000);












