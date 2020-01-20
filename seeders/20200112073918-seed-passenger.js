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
    return queryInterface.bulkInsert('Passengers', [{
      surName: 'Dol',
      initials: 'CJ',
      email: 'doecj2t3@gmail.com',
      password: '$2b$10$5SEZwjPvmspPKDE05b7dYuluh1GTBJtJMrw/hOffCjUN8L95sttE2',
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }, 
    {
      surName: 'Johns',
      initials: 'TLT',
      email: 'jttlne6w@gmail.com',
      password: '$2b$10$5SEZwjPvmspPKDE05b7dYuluh1GTBJtJMrw/hOffCjUN8L95sttE2',
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }, 
    {
      surName: 'Demo User',
      initials: 'ABC',
      email: 'demo@t.com',
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

   return queryInterface.bulkDelete('Passengers', null, {});

  }
};
