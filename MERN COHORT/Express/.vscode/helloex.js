const express = require('express');

const app = express();
// apporch 1 -> Using basic routes

/*app.get('/',function(req,res){

    res.send("<h1> hello world </h1>");
});

app.listen(8000, () =>{
    console.log(`server is listening at http://localhost:8000`);
})
    */

//approach 2 -> Using arrow Function

/* app.get("/", (req,res) => res.send('<h1> hello world </h2>'));


app.listen(8000,() => console.log("server listering on port 8000"));
*/

//approach 3 - > using middleware 

app.use((req,res) => {
    res.send('<h1> Hello, World!</h1>')
});

app.listen(8000, () => console.log('server listering on port 8000'));