const {RentalUnit} = require ('../models');


const searchFeature = async (req,res) => {
    try{
        const feature = req.query.feature;

        if (!feature){
            return res.status(400).json({error: 'Feature is required for search'});
        }

        const allUnits = await RentalUnit.findAll();

        const filteredUnits = allUnits.filter(unit =>
            unit.features.some(f => f.toLowerCase().includes(feature.toLowerCase()))
        );

        res.status(200).json(filteredUnits);

    }catch(error){
        console.error('Error creating review:', error);
        res.status(500).json({error:'Internal server error'});
    }
};

module.exports = {searchFeature};