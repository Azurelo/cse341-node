const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Routes
const homeRoute = require('./routes/home');

// Use routes
app.use('/', homeRoute);

// Start server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
