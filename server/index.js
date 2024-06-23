// app.js
const express = require('express');
const app = express();
const port = 7777;

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
 res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
});
