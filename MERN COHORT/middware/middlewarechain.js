//What is middleware chaining in Express JS,
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// middleware function 1
const reqFunction = (req, res, next) => {
  console.log(`Received a ${req.method} request to ${req.url}`);
  next();
};

// middleware function 2
const forDataFunction = (req, res, next) => {
  const { name, username } = req.body;
  if (name) {
    req.name = name;
  }
  if (username) {
    req.username = username;
  }
  next();
};

// middleware function 3
const userShowFunction = (req, res) => {
  const name = req.name || 'Guest';
  const username = req.username || 'No Username';
  res.send(`<h1>Hello, ${name}! Your username is ${username}.</h1>`);
};

// route handler with middleware chaining
app.get('/', reqFunction, (req, res) => {
  res.send(`
    <form method="post" action="/msg" style="margin-top: 20px;">
      <label for="name">Enter your name:</label>
      <input type="text" id="name" name="name" required>
      <br><br>
      <label for="username">Enter your username:</label>
      <input type="text" id="username" name="username" required>
      <br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/msg", reqFunction, forDataFunction, userShowFunction);

// starting the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
