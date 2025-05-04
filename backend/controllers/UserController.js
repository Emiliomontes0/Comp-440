const { where } = require("sequelize");
const { User, Review, RentalUnit, sequelize } = require('../models');
const { Op } = require('sequelize');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const { username, firstName, lastName, email, phone, password } = req.body;

    try {
        // Check if user already exists using sequelize
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" }); //error codes for debugging
        }

        // Hashes password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = await User.create({
            username,
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
        });

        return res.status(201).json({ message: "User created successfully", user: newUser });//error codes for debugging
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });//error codes for debugging
    }
};

const login = async (req, res) => {
    const{username, password} = req.body;

    try{
        // Check if the user exists
        const user = await User.findOne({ where: {username} });
        if (!user){
            return res.status(400).json({message: "Username doesn't exist. Sign up for a free account!"});
        }
        
        // Check if password is a match
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(400).json({message: "Invalid password!"});
        }

        const token = jwt.sign(
            {id: user.id, username: user.username },
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        );

        // Returns user info to verify login
        return res.status(200).json({
            message: "Login succesful.",
            token,
            user: {
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } catch (error){
        console.error("Login Error:", error);
        return res.status(500).json({message: "Server error", error: error.message});
    }
}

const getUsersWithOnlyPoorReviews = async (req, res) => {
  try {
    const users = await User.findAll({
        include: [
          {
            model: Review,
            as: 'reviews',
            required: true,
            where: { rating: 'poor' }
          }
        ],
        where: sequelize.literal(`
          NOT EXISTS (
            SELECT 1 FROM reviews AS r
            WHERE r."userID" = "User"."id" AND r.rating <> 'poor'
          )
        `)
      });
      
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUsersWithNoPoorReviewsOnUnits = async (req, res) => {
  try {
    const users = await User.findAll({
        include: [
          {
            model: RentalUnit,
            as: 'rental_units',
            required: true,
          }
        ],
        where: sequelize.literal(`
          NOT EXISTS (
            SELECT 1 FROM rental_units ru
            JOIN reviews r ON r."rentalUnitID" = ru.id
            WHERE ru."ownerID" = "User"."id" AND r.rating = 'poor'
          )
        `)
      });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { 
    signup,
    login, //add all function exports here
    getUsersWithNoPoorReviewsOnUnits,
    getUsersWithOnlyPoorReviews,
};