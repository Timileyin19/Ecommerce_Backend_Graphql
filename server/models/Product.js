const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  price: {
    type: Number,
  },
  productCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductCategory",
  },
});

module.exports = mongoose.model("Product", ProductSchema);
