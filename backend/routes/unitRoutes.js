const express = require("express");
const router = express.Router();
const {addUnit} = require("../controllers/addUnitController");
const { route } = require("./userRoutes");
const authenticateToken = require("../middleware/authenticateToken")


router.post('/addUnit', authenticateToken, addUnit);

module.exports = router;