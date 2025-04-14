const { Review, RentalUnit } = require('../models');
const { Op } = require('sequelize');

const createReview = async (req, res) => {
  try {
    const userID = req.user.id;
    const { rentalUnitID, rating, description } = req.body;

    const rentalUnit = await RentalUnit.findByPk(rentalUnitID);

    if (!rentalUnit) {
      return res.status(404).json({ message: 'Rental unit not found.' });
    }

    if (rentalUnit.ownerID === userID) {
      return res.status(400).json({ message: 'You cannot review your own rental unit.' });
    }

    const existingReview = await Review.findOne({
      where: { userID, rentalUnitID },
    });

    if (existingReview) {
      return res.status(400).json({ message: 'You have already reviewed this rental unit.' });
    }

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const reviewCount = await Review.count({
      where: {
        userID,
        createdAt: {
          [Op.gte]: todayStart,
        },
      },
    });

    if (reviewCount >= 3) {
      return res.status(400).json({ message: 'You can only write up to 3 reviews per day.' });
    }

    const newReview = await Review.create({
      userID,
      rentalUnitID,
      rating,
      description,
    });

    return res.status(201).json(newReview);

  } catch (error) {
    console.error('Error creating review:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getReviewsByRentalUnit = async (req, res) => {
    try {
      const { rentalUnitID } = req.params;
  
      const reviews = await Review.findAll({
        where: { rentalUnitID },
        include: [
          {
            model: RentalUnit,
            attributes: ['title'],
          },
          {
            model: User,
            attributes: ['id', 'firstName', 'lastName'],
          },
        ],
        order: [['createdAt', 'DESC']],
      });
  
      return res.status(200).json(reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  

module.exports = { 
    createReview,
    getReviewsByRentalUnit, 

};
