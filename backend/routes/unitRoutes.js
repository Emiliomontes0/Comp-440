const express = require("express");
const router = express.Router();
const {addUnit} = require("../controllers/addUnitController");
const { route } = require("./userRoutes");
const {getAllUnits} = require ("../controllers/rentalController");
const {getMostExpensiveUnits} = require("../controllers/expensiveUnitController");
const authenticateToken = require("../middleware/authenticateToken");


router.post('/addUnit', authenticateToken, addUnit);

router.get('/',getAllUnits);

router.get('/most-expensive',getMostExpensiveUnits);

module.exports = router;