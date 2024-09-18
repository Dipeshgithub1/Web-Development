const express = require("express");

const app = express();
const port = 3000; // Use 'port' instead of 'Port' to follow JavaScript naming conventions

app.use(express.json());

app.post('/', function(req, res) {
    console.log(req.body.name);
    res.end();
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server listening on PORT", port);
    }
});
