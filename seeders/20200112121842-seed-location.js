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
    return queryInterface.bulkInsert('Locations', [{
      name: 'NSBM',
      description: 'Homagama, Pitipana',
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }, {
      name: 'Kottawa',
      description: 'Kottawa, Makumbura Highway Terminal',
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

   return queryInterface.bulkDelete('Locations', null, {});

  }
};
