const express = require('express');
const router = express.Router();
const { createReview, getReviewsByRentalUnit } = require('../controllers/reviewController');


router.post('/', createReview);
router.get('/rental/:rentalUnitID', getReviewsByRentalUnit);

module.exports = router;
