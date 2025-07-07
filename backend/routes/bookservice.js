const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const BookService = require("../modles/bookservice");
const router = express.Router();
const User = require("../modles/user");
// POST /api/book-service
router.post('/', async (req, res) => {
  try {
    const {
      serviceName,
      duration,
      price,
      schedule,
      caretakerType,
      address,
      location,
      phone,
    } = req.body;

    // Validate fields
    if (
      !serviceName || !duration  || !phone ||
      !schedule || !address || !caretakerType || !location
    ) {
      return res.status(400).json({ error: 'All fields are required',res:req.body });
    }

    const newBooking = new BookService({
      serviceName,
      duration,
      price,
      schedule,
      caretakerType,
      address,
      location,
      phone,
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
router.get('/allbookings', async (req, res) => {
  try {
    

    // Find bookings by userId
     const bookings = await BookService.find({}).sort({ createdAt: 1 }); // 1 = ascending

    
    res.status(200).json({ bookings });
  } catch (error) {
    console.error('Error retrieving bookings:', error);
    res.status(500).json({ error: 'Something went wrong while fetching bookings' });
  }
});

// Get only pending bookings
router.get('/allbookings/pending', async (req, res) => {
  try {
    const bookings = await BookService.find({ status: 'pending' }).sort({ createdAt: 1 });
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pending bookings' });
  }
});

// Get only successful bookings
router.get('/allbookings/successful', async (req, res) => {
  try {
    const bookings = await BookService.find({ status: 'successful' }).sort({ createdAt: 1 });
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch successful bookings' });
  }
});

// Get only canceled bookings
router.get('/allbookings/canceled', async (req, res) => {
  try {
    const bookings = await BookService.find({ status: 'canceled' }).sort({ createdAt: 1 });
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch canceled bookings' });
  }
});

module.exports = router;
