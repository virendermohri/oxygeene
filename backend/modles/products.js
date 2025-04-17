const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Medical Equipment", "Home Care", "Mobility Aids", "Monitoring Devices", "Other"],
    required: true,
  },
  price: {
    type: Number, // Full purchase price
    required: true,
  },
  rentPrice: {
    type: Number, // Rent per day or week (as per your model)
    default: 0,
  },
  img: {
    type: String,
    default: "", // You can also validate if it's a valid URL
  },
  description: {
    type: String,
    default: "",
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  stock: {
    type: Number,
    default: 1,
  },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);

