const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  durations: {
    type: [String],
    required: true,
  },
  price: {
    type: Map,
    of: Number, // supports keys like 'Daily', 'Weekly' etc.
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
    default: "", // URL of service image
  },
}, { timestamps: true });

module.exports = mongoose.model("Services", serviceSchema);
