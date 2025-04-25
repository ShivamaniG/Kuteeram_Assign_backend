const express = require('express');
const router = express.Router();
const { bookService, getBookings } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, bookService);
router.get('/', authMiddleware, getBookings);

module.exports = router;
