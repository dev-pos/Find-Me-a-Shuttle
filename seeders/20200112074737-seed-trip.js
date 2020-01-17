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
    return queryInterface.bulkInsert('Trips', [{
      startDateTime: new Date().toString(),
      endDateTime: '',
      driverId: 1,
      busId: 1,
      startLoc: 1,
      endLoc: 2,
      completed: 0,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }, {
      startDateTime: new Date().toString(),
      endDateTime: '',
      driverId: 2,
      busId: 2,
      startLoc: 2,
      endLoc: 1,
      completed: 0,
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

   return queryInterface.bulkDelete('Trips', null, {});

  }
};
