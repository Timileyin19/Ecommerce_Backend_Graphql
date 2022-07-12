const mongoose = require("mongoose");

const ProductCategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  routeName: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  size: {
    type: String,
  },
});

module.exports = mongoose.model("ProductCategory", ProductCategorySchema);
