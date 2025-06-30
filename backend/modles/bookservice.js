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
    type: Number,
    required: true,
  },
  scheduleDateTime: {
    type: Date,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['online', 'cash'],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending',
  },
  phone_number: {
    type: String,
    required: true,
  },
  referenceid:{
    type: String,

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("BookService", bookServiceSchema);

