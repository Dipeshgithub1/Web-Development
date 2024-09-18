const express = require("express");
const app = express();

var user = [{
    name:"john",
    kidneys:[{
        healthy:false
    
    }]

    }];
    app.use(express.json());

    app.get("/",function(req,res){
        const johnKidney = user[0].kidneys;
        const numberofkidney = johnKidney.length;

        let numberofhealthykidney = 0;

        for(let i=0;i<johnKidney.length;i++){
            if(johnKidney[i].healthy){
                numberofhealthykidney= numberofhealthykidney + 1;
            }

        }
        const numberofunhealthykidney = numberofkidney - numberofhealthykidney;
        res.json({
            numberofkidney,
            numberofhealthykidney,
            numberofunhealthykidney
        })

    });

    app.post('/',function(req,res){
        const isHealthy = req.body.isHealthy;
        user[0].kidneys.push({
            healthy : isHealthy
        })
        res.json({
            msg :"Done!"
        })
    })

    app.put('/',function(req,res){
        for(let i=0;i<user[0].kidneys.length;i++){
        user[i].kidneys[0].healthy = true;
        }
        res.json({
            msg: "All kidneys updated to healthy!"
        });
    })

    app.delete('/',function(req,res){
        const newKidneys = [];
        for(let i=0;i<user[0].kidneys.length;i++){
            if(user[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
            }
        }
        user[0].kidneys = newKidneys;
        res.json({msg : "Done"})
    })
  app.listen(3000);