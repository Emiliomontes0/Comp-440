const express = require("express");
const { signup,login,getUsersWithOnlyPoorReviews,getUsersWithNoPoorReviewsOnUnits } = require("../controllers/userController"); // add other functions here 
const authenticateToken = require("../middleware/authenticateToken");
const router = express.Router();

router.post("/signup", signup);
router.post("/login",login);

router.get("/profile", authenticateToken, (req, res) => {
    res.json({message: "You are authorized", user: req.user});
});

router.get('/only-poor-reviewers', getUsersWithOnlyPoorReviews);
router.get('/clean-landlords', getUsersWithNoPoorReviewsOnUnits);


module.exports = router;
