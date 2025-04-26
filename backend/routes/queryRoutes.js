const express = require('express');
const router = express.Router();
const {getGoodOrBetterReviewsUnits, getTopPostersOnSpecificDate} = require('../controllers/queryController');

router.get('/positive-reviews', getGoodOrBetterReviewsUnits);
router.get('/top-posters/:date', getTopPostersOnSpecificDate);

module.exports = router;