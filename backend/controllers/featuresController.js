const {RentalUnit,User,Sequelize} = require ('../models');
const {Op} = Sequelize;

const getUnitsByFeaturesSameDay = async (req,res) => {
    const {feature1, feature2} = req.query;

    try{
        const units = await RentalUnit.findAll({
            include: [{
                model :User,
                as:'owner'
            }],
            where: {
                features:{
                    [Op.overlap]:[feature1,feature2]
                }
            }
        });

        const pairs =[];

        for (let i = 0; i < units.length; i++) {
          for (let j = i + 1; j < units.length; j++) {
            const date1 = new Date(units[i].createdAt).toDateString();
            const date2 = new Date(units[j].createdAt).toDateString();

            const hasBothFeatures =
            (units[i].features.includes(feature1) && units[j].features.includes(feature2)) ||
            (units[i].features.includes(feature2) && units[j].features.includes(feature1));
    
            if (
              date1 === date2 && 
              hasBothFeatures
            ) {
              pairs.push({
                unit: {
                    title: units[i].title,
                    description: units[i].description,
                    price: units[i].price,
                    features: units[i].features,
                    createdAt: units[i].createdAt
              },
              user:{
                firstName: units[i].owner.firstName,
                lastName: units[i].owner.lastName
              }
            });
            pairs.push({
                unit: {
                  title: units[j].title,
                  description: units[j].description,
                  price: units[j].price,
                  features: units[j].features,
                  createdAt: units[j].createdAt
                },
                user: {
                  firstName: units[j].owner.firstName,
                  lastName: units[j].owner.lastName
                }
              });
    
              return res.json(pairs); 
            }
          }
        }
    
        res.json([]); 
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error searching by features' });
      }
    };

module.exports = {
    getUnitsByFeaturesSameDay
    };