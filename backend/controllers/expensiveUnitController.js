const {RentalUnit, User} = require ('../models');

const getMostExpensiveUnits = async (req, res) => {
    try{
        const units = await RentalUnit.findAll({
            include: [
                {
                    model:User,
                    as:'owner',
                    attributes: ['id','firstName','lastName'],
                }
            ]
        });

        
        res.status(200).json(units);
    } catch(error){
        console.error('Error Fetching Rental Units:', error);
        res.status(500).json({error:'Server error fetching rentals'});
    }
};

module.exports = {
    getMostExpensiveUnits
};