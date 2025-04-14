'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rentalUnitID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['excellent', 'good', 'fair', 'poor']],
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'Reviews',
  });

  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'userID' });
    Review.belongsTo(models.RentalUnit, { foreignKey: 'rentalUnitID' });
  };

  return Review;
};
