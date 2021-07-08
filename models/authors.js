'use strict';
module.exports = (sequelize, DataTypes) => {
  const Authors = sequelize.define('Authors', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    religion: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    age: DataTypes.INTEGER
  }, {});
  Authors.associate = function(models) {
    // associations can be defined here
  };
  return Authors;
};