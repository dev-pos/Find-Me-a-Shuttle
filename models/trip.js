'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    startDateTime: DataTypes.INTEGER,
    endDateTime: DataTypes.STRING,
    driverId: DataTypes.INTEGER,
    busId: DataTypes.INTEGER,
    startLoc: DataTypes.INTEGER,
    endLoc: DataTypes.INTEGER,
    completed: DataTypes.INTEGER
  }, {});

  Trip.associate = function (models) {
    //relations are defined here
    Trip.hasOne(models.Driver, {
      foreignKey: 'id'
    });
    Trip.hasOne(models.Bus, {
      foreignKey: 'id'
    });
    Trip.hasOne(models.Location, {
      foreignKey: 'id'
    });
    Trip.hasOne(models.Location, {
      foreignKey: 'id'
    });
  };
  return Trip;
};