const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const BookService = require("../modles/bookservice");
const router = express.Router();
const User = require("../modles/user");
// POST /api/book-service
router.post('/', async (req, res) => {
  try {
    const {
    
      address,
      duration,
      serviceName,
      price,
      scheduleDateTime,
      paymentMethod,
      phone_number
    } = req.body;

    // Validate fields
    if (
       !serviceName || !duration || !price || !phone_number ||
      !scheduleDateTime || !paymentMethod || !address
    ) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newBooking = new BookService({
      serviceName,
      duration,
      price,
      scheduleDateTime: new Date(scheduleDateTime),
      paymentMethod,
      address,
      phone_number: phone_number,
      referenceid: req.body.referenceid || "",
    });

    await newBooking.save();
    res.status(201).json({ message: 'Service booked successfully', booking: newBooking });
  } catch (error) {
    console.error('Booking Error:', error);
    res.status(500).json({ error: 'Something went wrong while booking the service' });
  }
});
// GET /api/book-service/user/:userId
router.get('/user/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Find bookings by userId
      const bookings = await BookService.find({ userId });
  
      if (!bookings.length) {
        return res.status(404).json({ message: 'No bookings found for this user' });
      }
  
      res.status(200).json({ bookings });
    } catch (error) {
      console.error('Error retrieving bookings:', error);
      res.status(500).json({ error: 'Something went wrong while fetching bookings' });
    }
  });
  
module.exports = router;
