//To CREATE Product Model
const mongoose = require("mongoose");

//Schematic for DB item, to include name, quantity, price, image
const ProductSchematic = mongoose.Schema(
  {
    //Name which is required and a string
    name: {
      type: String,
      required: [true, "Please Enter Product Name"],
    },
    //Quantity which is required and a number, with a default of 0
    quantity: {
      type: Number,
      required: [true],
      default: 0,
    },
    //Price which is required and a number, with a default of 0
    price: {
      type: Number,
      required: [true],
      default: 0,
    },
    //Image which is not required and a string
    image: {
      type: String,
      required: [false],
    },
  },
  {
    //creates 'created at' and 'updated at' columns
    timestamps: true,
  }
);

//Create in MongoDB Database
const Product = mongoose.model("Product", ProductSchematic);

module.exports = Product;
