const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.status(200);
});

app.get("/json", (req, res) => {
  res.json({
    name: "Annappa Gowda",
    position: "Software Engineer",
    age: 25,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// const { createServer } = require('node:http');

// const port = 3000;
// const hostname = '127.0.0.1';
// const server = createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!')
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })
