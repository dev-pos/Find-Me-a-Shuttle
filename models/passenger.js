'use strict';
module.exports = (sequelize, DataTypes) => {
  const Passenger = sequelize.define('Passenger', {
    surName: DataTypes.STRING,
    initials: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Passenger.associate = function(models) {
    // associations can be defined here
  };
  return Passenger;
};