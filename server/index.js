const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/index.js");
require("dotenv").config();

// Middlewares
app.use(express.json());

// allow cors
let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};
app.use(allowCrossDomain);

// Routes
app.use("/api/v1/", routes);

// Function to connect to DB and start servre
const start = () => {
  try {
    // Connect to DB
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

    // Shhhh!! Listen..
    app.listen(3001, () => {
      console.log("listening very closely...");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
