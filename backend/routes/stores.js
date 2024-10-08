const express = require("express");
const Router = express.Router();
const Product = require("../models/ProductSchema");
const {
  createNewgame,
  getAllgames,
  findSpecificgame,
  updateAgame,
  deleteGame,
} = require("../controllers/ProductController");

// Create a new product
Router.post("/", createNewgame);

// Get all products
Router.get("/", getAllgames);

// Get a single product by ID
Router.get("/:id", findSpecificgame);

// Update a product by ID
Router.patch("/:id", updateAgame);

// Delete a product by ID
Router.delete("/:id", deleteGame);

module.exports = Router;
