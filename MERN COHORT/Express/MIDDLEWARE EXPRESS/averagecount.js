const express = require('express');

const app = express();

let requestCount = 0;
let totalRequestCount = 0;
let averageCount = 0;

function ratelimitter(req, res, next) {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    totalRequestCount += duration;
    requestCount++;
    averageCount = totalRequestCount / requestCount;

    console.log(`Request count: ${requestCount}`);
    console.log(`Current request duration: ${duration}ms`);
    console.log(`Average request duration: ${averageCount.toFixed(2)}ms`);
  });

  next();
}

app.get("/health-checkup", ratelimitter, function(req, res) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username === "admin" && password === "admin") {
    res.status(200).json({
      msg: "Authentication Successful"
    });
  } else {
    res.status(403).json({
      msg: "Something is up with your username or password"
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
