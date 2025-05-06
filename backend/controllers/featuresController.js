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

        const userUnitsByDate ={};
        const matchingUsers =[];

        for (const unit of units){
          const userId = unit.owner.id;
          const dateKey = new Date(unit.createdAt).toDateString();
          const key = `${userId}-${dateKey}`;

          if(!userUnitsByDate[key]){
            userUnitsByDate[key] = {
              user:unit.owner,
              units:[]
            };
          }

          userUnitsByDate[key].units.push(unit);
        }


        for (const value of Object.values(userUnitsByDate)){
          const {user, units} = value;
          let hasFeature1 = false;
          let hasFeature2 = false;

          for (const unit of units){
            if(unit.features.includes(feature1)) hasFeature1 = true;
            if(unit.features.includes(feature2)) hasFeature2 = true;
          }

          if (hasFeature1 && hasFeature2){
            matchingUsers.push({
              firstName : user.firstName,
              lastName: user.lastName
            });

          }
        }
    
        res.json(matchingUsers)
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error searching by features' });
      }
    };

module.exports = {
    getUnitsByFeaturesSameDay
    };