let http = require("http");

//create server 
http.createServer(function(req,res){

    res.writeHead(200,{
        'content-Type':'text/plain'
    });
    res.end('this is the example of node.js web based application \n')
}).listen(5000, ()=> console.log('server is running at http://127.0.0.1:5000/'));