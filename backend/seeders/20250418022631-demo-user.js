'use strict';

const bcrypt = require('bcryptjs');


/** @type {import('sequelize-cli').Migration} */

// Helper function to generate random dates
function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password123',10);

    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'johndoe',
        password: await bcrypt.hash('password', 10),
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@mail.com',
        phone: '(123)456-7890',
        createdAt: new Date(2025,3,1),
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
        createdAt: new Date(2025,3,1),
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
        createdAt: new Date(2025,3,1),
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
        createdAt: new Date(2025,3,1),
        updatedAt: new Date(),
      },
      { id: 5, username: 'brucebanner', password: hashedPassword, firstName: 'Bruce', lastName: 'Banner', email: 'brucebanner@mail.com', phone: '(555)123-0005', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 6, username: 'dianaprince', password: hashedPassword, firstName: 'Diana', lastName: 'Prince', email: 'dianaprince@mail.com', phone: '(555)123-0006', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 7, username: 'barryallen', password: hashedPassword, firstName: 'Barry', lastName: 'Allen', email: 'barryallen@mail.com', phone: '(555)123-0007', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 8, username: 'arthurcurry', password: hashedPassword, firstName: 'Arthur', lastName: 'Curry', email: 'arthurcurry@mail.com', phone: '(555)123-0008', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 9, username: 'natasharomanoff', password: hashedPassword, firstName: 'Natasha', lastName: 'Romanoff', email: 'natasha@mail.com', phone: '(555)123-0009', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 10, username: 'steverogers', password: hashedPassword, firstName: 'Steve', lastName: 'Rogers', email: 'steverogers@mail.com', phone: '(555)123-0010', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 11, username: 'tonystark', password: hashedPassword, firstName: 'Tony', lastName: 'Stark', email: 'tonystark@mail.com', phone: '(555)123-0011', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 12, username: 'peterquill', password: hashedPassword, firstName: 'Peter', lastName: 'Quill', email: 'peterquill@mail.com', phone: '(555)123-0012', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 13, username: 'scottlang', password: hashedPassword, firstName: 'Scott', lastName: 'Lang', email: 'scottlang@mail.com', phone: '(555)123-0013', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 14, username: 'stephenstrange', password: hashedPassword, firstName: 'Stephen', lastName: 'Strange', email: 'stephenstrange@mail.com', phone: '(555)123-0014', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 15, username: 'tchalla', password: hashedPassword, firstName: 'T', lastName: 'Challa', email: 'tchalla@mail.com', phone: '(555)123-0015', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 16, username: 'buckybarnes', password: hashedPassword, firstName: 'Bucky', lastName: 'Barnes', email: 'buckybarnes@mail.com', phone: '(555)123-0016', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 17, username: 'wade_wilson', password: hashedPassword, firstName: 'Wade', lastName: 'Wilson', email: 'wadewilson@mail.com', phone: '(555)123-0017', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 18, username: 'mattmurdock', password: hashedPassword, firstName: 'Matt', lastName: 'Murdock', email: 'mattmurdock@mail.com', phone: '(555)123-0018', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 19, username: 'jessicajones', password: hashedPassword, firstName: 'Jessica', lastName: 'Jones', email: 'jessicajones@mail.com', phone: '(555)123-0019', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 20, username: 'lukecage', password: hashedPassword, firstName: 'Luke', lastName: 'Cage', email: 'lukecage@mail.com', phone: '(555)123-0020', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 21, username: 'frankcastle', password: hashedPassword, firstName: 'Frank', lastName: 'Castle', email: 'frankcastle@mail.com', phone: '(555)123-0021', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 22, username: 'elektra', password: hashedPassword, firstName: 'Elektra', lastName: 'Natchios', email: 'elektra@mail.com', phone: '(555)123-0022', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 23, username: 'samwilson', password: hashedPassword, firstName: 'Sam', lastName: 'Wilson', email: 'samwilson@mail.com', phone: '(555)123-0023', createdAt: new Date(2025,3,1), updatedAt: new Date() },
      { id: 24, username: 'kategarcia', password: hashedPassword, firstName: 'Kate', lastName: 'Garcia', email: 'kategarcia@mail.com', phone: '(555)123-0024', createdAt: new Date(2025,3,1), updatedAt: new Date() },
    ]); 
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
