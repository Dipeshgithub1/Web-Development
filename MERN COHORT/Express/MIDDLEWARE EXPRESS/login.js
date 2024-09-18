const express = require('express');

const app = express();

function ratelimitter(req,res,next){
  next();
  
}
app.get("/health-checkup",ratelimitter,function(req,res) {
  const username= req.headers.username;
  const password = req.headers.password;

  if(username == "admin" && password == "admin"){
    res.status(200).json({
      msg : "Authentication Succesfull"
    });
    
  } else {
    res.status(403).json({
      msg : "Something is up with your username or password"
    })
  }


});

app.listen(3000,function(){
  console.log('server is running on port 3000')
})
