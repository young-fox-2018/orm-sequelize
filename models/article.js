'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    AuthorId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};