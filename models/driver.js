'use strict';
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    surName: DataTypes.STRING,
    initials: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Driver.associate = function(models) {
    // associations can be defined here
  };
  return Driver;
};