const  http = require("http"); //importing the http module
 
//creating server 

const server = http.createServer((req,res) => {
    res.writeHead(200,{
        'content-Type':'text/html'
    });
    //sending the html port 
  res.end(('<h1>Hello Dipesh</h1>'));

});

//listernng on port 3000

const PORT = 3000;

server.listen(PORT,() => {
    console.log(`server running at http://localhost:${PORT}/`)
});
