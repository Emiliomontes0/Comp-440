

const express = require('express');
const router = express.Router();
const {getUnitsByFeaturesSameDay} = require ('../controllers/featuresController');

router.get('/units-by-features',getUnitsByFeaturesSameDay);

module.exports = router;