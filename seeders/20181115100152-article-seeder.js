'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [{
      title: 'Intro to Golang',
      body: "lorem ipsum dolor emmet",
      AuthorId: 1,
      TagId: 1,
      createdAt: new Date,
      updatedAt: new Date()
    }, {
      title: 'Intro to PHP',
      body: "lorem ipsum dolor emmet",
      AuthorId: 1,
      TagId: 1,
      createdAt: new Date,
      updatedAt: new Date()
    }, {
      title: 'Intro to Java',
      body: "lorem ipsum dolor emmet",
      AuthorId: 2,
      TagId: 1,
      createdAt: new Date,
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
