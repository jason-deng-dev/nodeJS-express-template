const express = require("express");
const app = express();
const path = require("node:path");

// setup for static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
// setup for EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const { body, validationResult } = require("express-validator");
// body parser for form POST
app.use(express.urlencoded({ extended: true }));




app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});