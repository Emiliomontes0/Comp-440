'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'johndoe',
        password: await bcrypt.hash('password', 10),
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
        password: await bcrypt.hash('password', 10),
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
        password: await bcrypt.hash('password', 10),
        firstName: 'Lucas',
        lastName: 'Smith',
        email: 'lucassmith@mail.com',
        phone: '(818)691-4924',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        username: 'aulloa',
        password: await bcrypt.hash('monkeys', 10),
        firstName: 'Alfredo',
        lastName: 'Ulloa',
        email: 'alfredoulloa@ymail.com',
        phone: '(661)406-9264',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]); 
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
