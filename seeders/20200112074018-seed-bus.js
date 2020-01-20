'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Buses', [{
      plate: 'DB-6788',
      seatsCount: 56,
      photoUrl: 'https://via.placeholder.com/250',
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }, {
      plate: 'ZX-6999',
      seatsCount: 56,
      photoUrl: 'https://via.placeholder.com/250',
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }, { 
      plate: 'LT-1243',
      seatsCount: 56,
      photoUrl: 'https://via.placeholder.com/250',
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    },  {
      plate: 'KR-2001',
      seatsCount: 56,
      photoUrl: 'https://via.placeholder.com/250',
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    },  
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

   return queryInterface.bulkDelete('Buses', null, {});

  }
};
