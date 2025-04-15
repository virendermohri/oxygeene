const mongoose = require("mongoose");

const CareTakerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String, // Use String to support country codes + validation
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true, // Store hashed password in DB
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "caretaker",
  },

  profileImage: {
    type: String, // Cloudinary URL
  },

  qualification: {
    type: String,
    required: true,
  },

  experience: {
    type: Number, // You can change to Number (in years) if needed
    required: true,
  },

  languages: {
    type: [String], // Multi-language support
    required: true,
  },

  availability: {
    type: String, // Consider using custom formats (e.g., morning/evening, or days)
    required: true,
  },

  specializations: {
    type: [String],
    required: true,
  },

  minSalary: {
    type: Number,
    required: true,
  },

  maxSalary: {
    type: Number,
    required: true,
  },

  idProof: {
    type: String, // URL of uploaded proof
  },

  policeVerification: {
    type: String, // URL or status
  },

  introVideo: {
    type: String, // Optional intro video
  },

  isApproved: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model("CareTaker", CareTakerSchema);
