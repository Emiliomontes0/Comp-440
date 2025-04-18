'use strict';
/** @type {import('sequelize-cli').Migration} */
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      rentalUnitID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'rental_units',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      rating: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['excellent', 'good', 'fair', 'poor']],
        },
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      },
    });

    //constraint for one review per user per rental unit
    await queryInterface.addConstraint('reviews', {
      fields: ['userID', 'rentalUnitID'],
      type: 'unique',
      name: 'unique_user_rental_review',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reviews');
  },
};