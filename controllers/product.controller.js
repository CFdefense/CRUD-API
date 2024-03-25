const Product = require("../models/product.model.js");

//get all products API
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get product API
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productId = await Product.findById(id);
    res.status(200).json(productId);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create product API
const createProduct = async (req, res) => {
  //save input to mongoDB
  try {
    //create product
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    //throw json error
    res.status(500).json({ message: error.message });
  }
};

//update product API
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    //find new product and respond
    const updProduct = await Product.findById(id);
    res.status(200).json(updProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete product API
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);

    if (!deleteProduct) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    res.status(200).json({ message: "Product Successfully Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
