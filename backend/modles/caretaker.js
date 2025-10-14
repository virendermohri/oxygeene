const mongoose = require("mongoose");

const caretakerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
    unique: true,
  },
 
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  languages: [
    {
      type: String,
    },
  ],
  location: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  
  pricePerDay: {
    type: Number,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  certifications: [
    {
      type: String,
    },
  ],
  previousWork: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
  
}, {
  timestamps: true,
});

module.exports = mongoose.model("Care Taker", caretakerSchema);

