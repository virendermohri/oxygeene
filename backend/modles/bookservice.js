const mongoose = require("mongoose");

const bookServiceSchema = new mongoose.Schema({

  serviceName: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: Object,
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
  },
  caretakerType: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending',
  },
  phone: {
    type: String,
    required: true,
  },
  referenceid: {
    type: String,
    
  },
  // paymentMethod: {
  //   type: String,
  //   enum: ['online', 'cash'],
  //   required: true,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("BookService", bookServiceSchema);

