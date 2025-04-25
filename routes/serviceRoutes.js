const express = require('express');
const router = express.Router();
const { createService, getServices } = require('../controllers/serviceController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, createService);
router.get('/', getServices);

module.exports = router;
