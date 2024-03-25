//Brain of the Back-End
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();

//middleware Config
//Allows for JSON INPUT
app.use(express.json());
//Allows for URLENCODED (Forms) Input
app.use(express.urlencoded({ extended: false }));

//URL Routing
app.use("/api/products", productRoute);

// Defining a route handler for the root URL '/'
app.get("/", (req, res) => {
  res.send("Hello from Node API Server Upd");
});

//Attempt connection to mongoDB using mongoose, then listen
mongoose
  .connect(
    "mongodb+srv://cfdefence:mongodbtest@backenddb.3zg57ft.mongodb.net/CRUD-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
    //Open Port 3000 for listening
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
