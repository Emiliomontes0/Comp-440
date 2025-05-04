'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('reviews', [
      {
        userID: 2,
        rentalUnitID: 1,
        rating: 'excellent',
        description: 'Great location and clean place!',
        createdAt: now,
        updatedAt: now,
      },
      {
        userID: 3,
        rentalUnitID: 1,
        rating: 'good',
        description: 'Nice and quiet, but could use better furniture.',
        createdAt: now,
        updatedAt: now,
      },
      {
        userID: 1,
        rentalUnitID: 2,
        rating: 'good',
        description: 'Spacious and family-friendly.',
        createdAt: now,
        updatedAt: now,
      },
      {
        userID: 3,
        rentalUnitID: 2,
        rating: 'excellent',
        description: 'Loved the backyard and the fireplace!',
        createdAt: now,
        updatedAt: now,
      },
      {
        userID: 2,
        rentalUnitID: 3,
        rating: 'poor',
        description: 'Would not recommend. Smelled like smoke.',
        createdAt: now,
        updatedAt: now,
      },
      {
        userID: 3,
        rentalUnitID: 3,
        rating: 'excellent',
        description: 'Amazing amenities, super modern.',
        createdAt: now,
        updatedAt: now,
      },
      {
        userID: 1,
        rentalUnitID: 4,
        rating: 'good',
        description: 'Relaxing beach vibes.',
        createdAt: now,
        updatedAt: now,
      },
      {
        userID: 3,
        rentalUnitID: 4,
        rating: 'excellent',
        description: 'Dreamy view and quiet nights.',
        createdAt: now,
        updatedAt: now,
      },
      {
        userID: 4,
        rentalUnitID: 5,
        rating: 'poor',
        description: 'Horrible smell and dirty kitchen.',
        createdAt: now,
        updatedAt: now,
      },
      {
        userID: 2,
        rentalUnitID: 5,
        rating: 'poor',
        description: 'No heating and rude landlord.',
        createdAt: now,
        updatedAt: now,
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', {
      rentalUnitID: { [Sequelize.Op.in]: [1, 2, 3, 4] }
    }, {});
  }
};
