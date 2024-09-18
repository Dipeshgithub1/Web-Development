
const express = require('express');

const app = express();

function sum(n){
  let ans = 0;
  for(var i = 1;i<=n;){
    ans = ans + i;
  }
  return ans;
}


app.get('/',function(req,res){
   const n = req.query.n;
   const ans = sum(n);
    res.send("hii your ans :",+ans)
    
})

app.listen(3000);