const {RentalUnit} = require("../models");
const {Op} = require("sequelize");


const addUnit = async (req,res) => {
    try{
        const ownerID = req.user.id;
        const {title, description, features, price} = req.body;

        if (!title || !description || !features || !price){
            return res.status(400).json({message: "Required fields are missing."});
        }

        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999);


        const exisitingUnits = await RentalUnit.count({
            where: {
                ownerID,
                createdAt: {
                    [Op.between]: [todayStart, todayEnd]
                }
            }
        });

        if (exisitingUnits >= 2){
            return res.status(403).json({message: "You've reached the daily limit of 2 posts a day. Try again tommorow."})
        }
        
        const newUnit = await.RentalUnit.create({
            title,
            ownerID: ownerID,
            description,
            features,
            price
        });
        return res.status(201).json({message: "Rental unit added succesfully.", unit: newUnit});
    }catch (error){
        console.error("Error adding rental unit:", error);
        return res.status(500).json({message: "Could not add rental unit."});
    }
};

module.exports = {addUnit};