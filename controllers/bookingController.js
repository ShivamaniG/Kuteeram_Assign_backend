const Booking = require('../models/Booking');

exports.bookService = async (req, res) => {
  try {
    const booking = await Booking.create({ user: req.user.id, service: req.body.service });
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('service');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
