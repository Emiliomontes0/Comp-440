'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('rental_units', [
      {
        id: 1,
        ownerID: 1,
        title: 'Downtown Loft with Skyline View',
        description: 'Spacious and stylish loft with an amazing view of the city skyline.',
        features: ['balcony', 'washer/dryer', 'AC'],
        price: 2500.00,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 2,
        ownerID: 2,
        title: 'Quiet Suburban 2-Bedroom',
        description: 'Perfect for families, located in a peaceful suburban area.',
        features: ['garage', 'garden', 'fireplace'],
        price: 1800.00,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 3,
        ownerID: 1,
        title: 'Modern Studio near Tech Hub',
        description: 'Ideal for professionals, close to tech offices and public transport.',
        features: ['gym access', 'rooftop', 'smart home features'],
        price: 1600.00,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 4,
        ownerID: 2,
        title: 'Beachside Bungalow',
        description: 'Live by the waves in this cozy beachside spot. Great for remote workers.',
        features: ['ocean view', 'AC', 'hammock'],
        price: 2100.00,
        createdAt: now,
        updatedAt: now,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rental_units', {
      id: { [Sequelize.Op.in]: [1, 2, 3, 4] }
    }, {});
  }
};
