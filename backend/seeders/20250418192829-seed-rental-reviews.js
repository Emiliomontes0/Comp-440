'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('reviews', [
      {
        userID: 2,
        rentalUnitID: 1,
        rating: 'excellent',
        description: 'Great location and clean place!',
        createdAt: new Date(2025, 3, 22),
        updatedAt: new Date(2025, 3, 22),
      },
      {
        userID: 3,
        rentalUnitID: 1,
        rating: 'good',
        description: 'Nice and quiet, but could use better furniture.',
        createdAt: new Date(2025, 3, 22),
        updatedAt: new Date(2025, 3, 22),
      },
      {
        userID: 1,
        rentalUnitID: 2,
        rating: 'good',
        description: 'Spacious and family-friendly.',
        createdAt: new Date(2025, 3, 22),
        updatedAt: new Date(2025, 3, 22),
      },
      {
        userID: 3,
        rentalUnitID: 2,
        rating: 'excellent',
        description: 'Loved the backyard and the fireplace!',
        createdAt: new Date(2025, 3, 22),
        updatedAt: new Date(2025, 3, 22),
      },
      {
        userID: 2,
        rentalUnitID: 3,
        rating: 'poor',
        description: 'Would not recommend. Smelled like smoke.',
        createdAt: new Date(2025, 3, 22),
        updatedAt: new Date(2025, 3, 22),
      },
      {
        userID: 3,
        rentalUnitID: 3,
        rating: 'excellent',
        description: 'Amazing amenities, super modern.',
        createdAt: new Date(2025, 3, 22),
        updatedAt: new Date(2025, 3, 22),
      },
      {
        userID: 1,
        rentalUnitID: 4,
        rating: 'good',
        description: 'Relaxing beach vibes.',
        createdAt: new Date(2025, 3, 22),
        updatedAt: new Date(2025, 3, 22),
      },
      {
        userID: 3,
        rentalUnitID: 4,
        rating: 'excellent',
        description: 'Dreamy view and quiet nights.',
        createdAt: new Date(2025, 3, 18),
        updatedAt: new Date(2025, 3, 18),
      },
      {
        userID: 4,
        rentalUnitID: 5,
        rating: 'poor',
        description: 'Horrible smell and dirty kitchen.',
        createdAt: new Date(2025, 3, 21),
        updatedAt: new Date(2025, 3, 21),
      },
      {
        userID: 2,
        rentalUnitID: 5,
        rating: 'poor',
        description: 'No heating and rude landlord.',
        createdAt: new Date(2025, 3, 22),
        updatedAt: new Date(2025, 3, 22),
      },
      {
        userID: 21,
        rentalUnitID: 5,
        rating: 'poor',
        description: 'DISGUISTING! Always smells like seawater.',
        createdAt: new Date(2025, 3, 22),
        updatedAt: new Date(2025, 3, 22),
      },
      {
        userID: 21,
        rentalUnitID: 9,
        rating: 'poor',
        description: 'Too much dirt for my liking. Wouldn\'t recommend.',
        createdAt: new Date(2025, 3, 28),
        updatedAt: new Date(2025, 3, 28),
      },
      {
        userID: 19,
        rentalUnitID: 10,
        rating: 'excellent',
        description: 'My family really enjoyed the spacious backyard while I relaxed in the hottub!',
        createdAt: new Date(2025, 3, 27),
        updatedAt: new Date(2025, 3, 27),
      },
      {
        userID: 21,
        rentalUnitID: 3,
        rating: 'poor',
        description: 'Studio is located in noisy area. Couldn\'t sleep. Terrible experience.',
        createdAt: new Date(2025, 3, 15),
        updatedAt: new Date(2025, 3, 15),
      },
      {
        userID: 21,
        rentalUnitID: 1,
        rating: 'poor',
        description: 'Skyline view that was promised was just all smog. Did not enjoy at all.',
        createdAt: new Date(2025, 3, 15),
        updatedAt: new Date(2025, 3, 15),
      },
      {
        userID: 21,
        rentalUnitID: 2,
        rating: 'poor',
        description: 'Location was too far from anything else. Spend most of the time out of the place.',
        createdAt: new Date(2025, 3, 15),
        updatedAt: new Date(2025, 3, 15),
      },
      {
        userID: 2,
        rentalUnitID: 6,
        rating: 'good',
        description: 'Spend a relaxing time here with my spouse. Could use a makeover. Overall, a good time.',
        createdAt: new Date(2025, 3, 19),
        updatedAt: new Date(2025, 3, 19),
      },
      {
        userID: 11,
        rentalUnitID: 7,
        rating: 'excellent',
        description: 'Could spend years at location, enjoyed the animal scenery.',
        createdAt: new Date(2025, 3, 16),
        updatedAt: new Date(2025, 3, 16),
      },
      {
        userID: 3,
        rentalUnitID: 7,
        rating: 'good',
        description: 'Having animals was nice, didn\'t enjoy the outdated decor.',
        createdAt: new Date(2025, 3, 25),
        updatedAt: new Date(2025, 3, 25),
      },
      {
        userID: 4,
        rentalUnitID: 9,
        rating: 'poor',
        description: 'The harsh, archaic living conditions were more than I expected. Don\'t come here.',
        createdAt: new Date(2025, 3, 23),
        updatedAt: new Date(2025, 3, 23),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', {
      rentalUnitID: { [Sequelize.Op.in]: [1, 2, 3, 4] }
    }, {});
  }
};
