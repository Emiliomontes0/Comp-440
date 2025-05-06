'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('rental_units', [
      {
        id: 1,
        ownerID: 1,
        title: 'Downtown Loft with Skyline View in Los Angeles, California',
        description: 'Spacious and stylish loft with an amazing view of the city skyline.',
        features: ['balcony', 'washer/dryer', 'AC'],
        price: 2500.00,
        createdAt: new Date(2025, 3, 8),
        updatedAt: new Date(2025, 3, 8),
      },
      {
        id: 2,
        ownerID: 2,
        title: 'Quiet Suburban 2-Bedroom in Santa Clarita, California',
        description: 'Perfect for families, located in a peaceful suburban area.',
        features: ['garage', 'garden', 'fireplace'],
        price: 1800.00,
        createdAt: new Date(2025, 3, 7),
        updatedAt: new Date(2025, 3, 7),
      },
      {
        id: 3,
        ownerID: 1,
        title: 'Modern Studio near Tech Hub in Pasadena, California',
        description: 'Ideal for professionals, close to tech offices and public transport.',
        features: ['gym access', 'rooftop', 'smart home features'],
        price: 1600.00,
        createdAt: new Date(2025, 3, 8),
        updatedAt: new Date(2025, 3, 8),
      },
      {
        id: 4,
        ownerID: 2,
        title: 'Beachside Bungalow by Santa Monica, California',
        description: 'Live by the waves in this cozy beachside spot. Great for remote workers.',
        features: ['ocean view', 'AC', 'hammock'],
        price: 2100.00,
        createdAt: new Date(2025, 3, 7),
        updatedAt: new Date(2025, 3, 7),
      },
      {
        id: 5,
        ownerID: 3,
        title: 'Beachside Bungalow near Malibu, California',
        description: 'Live by the waves in this cozy beachside spot. Great for remote workers.',
        features: ['ocean view', 'AC', 'hammock'],
        price: 2100.00,
        createdAt: new Date(2025, 3, 15),
        updatedAt: new Date(2025, 3, 15),
      },
      {
        id: 6,
        ownerID: 3,
        title: 'Cozy Cottage in Tarzana, California',
        description: 'Small cottage located in the grassy hills.',
        features: ['fireplace', 'AC', 'hammock', 'treehouse'],
        price: 2700.00,
        createdAt: new Date(2025, 3, 15),
        updatedAt: new Date(2025, 3, 15),
      },
      {
        id: 7,
        ownerID: 4,
        title: 'Rural Farm House in Acton, California',
        description: 'Large farm house with open land up to 2 acres. Perfect for raising animals.',
        features: ['fireplace', 'barn', 'stables', 'coop'],
        price: 2400.00,
        createdAt: new Date(2025, 3, 15),
        updatedAt: new Date(2025, 3, 15),
      },
      {
        id: 8,
        ownerID: 7,
        title: 'Science Lab located in Central City, Missouri',
        description: 'State of the art lab with hidden rooms.',
        features: ['lab', 'generator', 'centrifuge'],
        price: 36000.00,
        createdAt: new Date(2025, 3, 17),
        updatedAt: new Date(2025, 3, 17),
      },
      {
        id: 9,
        ownerID: 15,
        title: 'Tribal hut in Border Village, Wakanda',
        description: 'Compact hut for those who enjoy the outdoors.',
        features: ['stove', 'spears', 'well'],
        price: 800.00,
        createdAt: new Date(2025, 3, 22),
        updatedAt: new Date(2025, 3, 22),
      },
      {
        id: 10,
        ownerID: 4,
        title: 'Charming Family Retreat in San Diego, California',
        description: '3-Bedroom house located in peaceful neighborhood.',
        features: ['backyard', 'AC', 'patio', 'washer/dryer', 'hottub'],
        price: 3200.00,
        createdAt: new Date(2025, 3, 26),
        updatedAt: new Date(2025, 3, 26),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rental_units', {
      id: { [Sequelize.Op.in]: [1, 2, 3, 4] }
    }, {});
  }
};
