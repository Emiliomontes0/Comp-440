const { User } = require("../models")
const bcrypt = require("bcryptjs");

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

module.exports = { 
    signup, //add all function exports here
};