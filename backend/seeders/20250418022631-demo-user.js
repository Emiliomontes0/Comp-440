'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'johndoe',
        password: 'password',
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@mail.com',
        phone: '(123)456-7890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        username: 'jeangrey',
        password: 'password',
        firstName: 'Jean',
        lastName: 'Grey',
        email: 'jeangrey@mail.com',
        phone: '(213)375-2743',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        username: 'lucassmith',
        password: 'password',
        firstName: 'Lucas',
        lastName: 'Smith',
        email: 'lucassmith@mail.com',
        phone: '(818)691-4924',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]); 
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
