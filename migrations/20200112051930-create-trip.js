'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      startDateTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      endDateTime: {
        type: Sequelize.DATE
      },
      driverId: {
        type: Sequelize.INTEGER
      },
      busId: {
        type: Sequelize.INTEGER
      },
      startLoc: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      endLoc: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      completed: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Trips');
  }
};