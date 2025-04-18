const express = require('express');
const router = express.Router();
const { createReview, getReviewsByRentalUnit } = require('../controllers/reviewController');
const authenticate = require("../middleware/authenticateToken");
router.post('/', authenticate, createReview);
router.get('/rental/:rentalUnitID', getReviewsByRentalUnit);

module.exports = router;
