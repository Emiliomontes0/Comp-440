const express = require("express");
const { signup } = require("../controllers/userController"); // add other functions here 
const router = express.Router();

router.post("/signup", signup);

module.exports = router;
