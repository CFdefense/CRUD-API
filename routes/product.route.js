const express = require("express");
const Product = require("../models/product.model.js");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");
const router = express.Router();

//get all products
router.get("/", getProducts);
//get one product
router.get("/:id", getProduct);
//create product
router.post("/", createProduct);
//upd product
router.put("/:id", updateProduct);
//delete product
router.delete("/:id", deleteProduct);

module.exports = router;
