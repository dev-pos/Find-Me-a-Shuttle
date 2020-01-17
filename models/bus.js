'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bus = sequelize.define('Bus', {
    plate: DataTypes.STRING,
    seatsCount: DataTypes.INTEGER,
    photoUrl: DataTypes.STRING
  }, {});
  Bus.associate = function(models) {
    // associations can be defined here
  };
  return Bus;
};