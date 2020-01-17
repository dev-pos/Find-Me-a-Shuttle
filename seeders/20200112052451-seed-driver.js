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
    return queryInterface.bulkInsert('Drivers', [{
      surName: 'Doe',
      initials: 'CJ',
      email: 'doecj23@gmail.com',
      password: '$2b$10$5SEZwjPvmspPKDE05b7dYuluh1GTBJtJMrw/hOffCjUN8L95sttE2',
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }, {
      surName: 'Johns',
      initials: 'TTL',
      email: 'jttlnew@gmail.com',
      password: '$2b$10$5SEZwjPvmspPKDE05b7dYuluh1GTBJtJMrw/hOffCjUN8L95sttE2',
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

   return queryInterface.bulkDelete('Drivers', null, {});

  }
};
