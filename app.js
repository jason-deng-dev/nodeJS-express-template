const express = require("express");
const app = express();

// setup for static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


// setup for EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const path = require("node:path");

// Setup for express validator
const { body, validationResult } = require("express-validator");




app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});