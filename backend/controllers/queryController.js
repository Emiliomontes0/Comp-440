/**
 * 3.List all the rental units posted by user X, such that all the
 *  comments are "Excellent" or "Good" for these rental units 
 * (in other words, these rental units must have comments, but these 
 * rental units don't have any other kinds of comments, such as "bad" 
 * or "fair" comments). User X is arbitrary and will be determined by the instructor.
 * 4. List the users who posted the most number of rental units on 4/15/2025;
 * if there is a tie, list all the users who have a tie.
 */
const {RentalUnit, Review, User, Sequelize} = require('../models');
const{Op} = Sequelize;

const getGoodOrBetterReviewsUnits = async (req, res) => {
    const username = req.query.username;

    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const units = await RentalUnit.findAll({
            where: { ownerID: user.id },
            include: [{
                model: Review,
                required: true
            }]
        });

        const positiveUnits = units.filter(unit =>
            unit.Reviews.every(r =>
                r.rating === 'excellent' || r.rating === 'good'
            )
        );

        res.json(positiveUnits);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching units', details: error.message });
    }
};

const getTopPostersOnSpecificDate = async (req, res) => {
    try {
        const counts = await RentalUnit.findAll({
            attributes: [
                'ownerID',
                [Sequelize.fn('COUNT', Sequelize.col('id')), 'unitCount']
            ],
            where: {
                createdAt: {
                    [Op.gte]: new Date('2025-04-15T00:00:00'),
                    [Op.lt]: new Date('2025-04-16T00:00:00')
                }
            },
            group: ['ownerID']
        });

        const max = Math.max(...counts.map(c => parseInt(c.dataValues.unitCount)));

        const topOwnerIDs = counts
            .filter(c => parseInt(c.dataValues.unitCount) === max)
            .map(c => c.ownerID);

        const topUsers = await User.findAll({
            where: { id: topOwnerIDs }
        });

        res.json(topUsers);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching top posters', details: error.message });
    }
};

module.exports = {
    getGoodOrBetterReviewsUnits,
    getTopPostersOnSpecificDate
};