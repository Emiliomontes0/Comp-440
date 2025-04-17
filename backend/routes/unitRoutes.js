const express = require("express");
const router = express.Router();
const {addUnit} = require("../controllers/addUnitController");
const { route } = require("./userRoutes");

router.post('/addUnit', addUnit);

module.exports = router;