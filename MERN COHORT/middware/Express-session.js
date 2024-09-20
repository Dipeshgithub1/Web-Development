/Express session middleware

const express = require('express');
const session = require('express-session');
const app = express();

const port = 3000;

// Setting the session middleware
app.use(session({
  secret: 'dip-key',
  resave: false,
  saveUninitialized: true,
}));

// Set session in the route
app.get('/', (req, res) => {
  // Session variable
  req.session.dipUser = 'Hello to the world of middleware';
  res.send(`Hey Dip! Session is set! Now go to 
      <a href="/get">/get</a> to retrieve the session.`);
});

// Get session in the /get route
app.get('/get', (req, res) => {
  // Retrieve the session variable
  const dipUser = req.session.dipUser || 'No session set';
  res.send(`Session variable: ${dipUser}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
