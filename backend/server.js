const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const storeRoutes = require("./routes/stores");
const cors = require("cors");

// Use the environment PORT or default to 5000
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Use built-in body parser for JSON requests

// Routes
app.use("/stores", storeRoutes);

// Connecting to the database
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to DB & App listening on port ${PORT}`);
    });
  });
