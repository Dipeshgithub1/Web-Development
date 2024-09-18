

/*const express = require('express');
const port = 3000;

function calculatesum(n){

    let ans = 0;
  
    for(let i=0;i<n;i++){
      ans = ans + i;
    }
    return ans;
    
  }
const app = express();

app.get('/',function(req,res){
    const n = req.query.n;
  
    const ans = calculatesum(n)
    res.send(ans)
    res.send(ans.toString());

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 


const express = require("express");

const app = express();

function sum(n){
    let ans =0;
    for(let i=1;i<=n;i++){
        ans = ans + i;
    }
    return ans;
}
app.get("/", function(req, res) {
    const n = req.query.n;
    const ans = sum(n);
    res.send("answer is ",+ans );
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); */

const express = require('express');

const app = express();


app.get('/',function(req,res){
    
})

app.listen(3001);
















 
