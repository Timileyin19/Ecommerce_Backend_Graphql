const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  price: {
    type: Number,
  },
  productId: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  userId: {
    type: String,
  },
  checkedOut: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
