//importing express
const express = require("express");

//creating a express app
const app = express();

//creating a route handler, watch for incoming requests, with get method, / is route, res.send sends some json back to who ever made the request
app.get("/", (req, res) => {
  res.send({
    hi: "there",
  });
});

const PORT = process.env.PORT || 5000;

//creating a express server on port 5000, tells node to listen to port 5000
app.listen(PORT);
