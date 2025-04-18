const {RentalUnit} = require('../models');

const getAllUnits = async(req,res) => {
    try{
        const units = await RentalUnit.findAll();
        res.status(200).json(units);
    } catch(error){
        console.error('Error Fetching Rental Units:', error);
        res.status(500).json({error:'Server error fetching rentals'});
    }
};

module.exports = {
    getAllUnits
};