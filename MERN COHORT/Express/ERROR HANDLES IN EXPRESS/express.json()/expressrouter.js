//express.Router()

const express = require('express');
const app = express();
const port = 3000;

//mutiple routing
const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();
const router4 = express.Router();

router1.get("/user",function(req,res,next){
console.log(" User Router is working");
  res.end();
});
router2.get("/login",function(req,res,next){
    console.log("login Router is working");
      res.end();
    });
    
    router3.get("/admin",function(req,res,next){
    console.log(" admin Router is working");
      res.end();
    });
    
    router4.get("/logout",function(req,res,next){
    console.log("logout Router is working");
      res.end();
    });
    
    app.use(router1);
    app.use(router2);
    app.use(router3);
    app.use(router4);
    
    
    app.listen(port,(err) => {
      if(err) console.log(err)
      console.log("server is running op port",port)
    });