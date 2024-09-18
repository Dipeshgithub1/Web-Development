const express = require('express');
const app = express();
const port = 3000;

app.post("/conversions", function(req, res) {
    console.log(req.body)
    res.send({
    msg: "2 + 2 = 4"
    });
        
});

app.listen(port, function() {
    console.log(`App listening on port ${port}`);
});

