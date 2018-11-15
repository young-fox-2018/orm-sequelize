'use strict';
module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define('article', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  article.associate = function(models) {
    // associations can be defined here
  };
  return article;
};