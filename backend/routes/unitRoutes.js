const express = require("express");
const router = express.Router();
const {addUnit} = require("../controllers/addUnitController");
const { route } = require("./userRoutes");
const {getAllUnits} = require ("../controllers/rentalController");
const authenticateToken = require("../middleware/authenticateToken");


router.post('/addUnit', authenticateToken, addUnit);

router.get('/',getAllUnits);

module.exports = router;