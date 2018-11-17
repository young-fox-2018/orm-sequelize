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
    return queryInterface.bulkInsert('Articles', [{
      title: "How to train your dragon",
      body: "Do ya wanna have a pet dragon?",
      AuthorId: 1,
      TagId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: "Everything Keeps Falling",
      body: "Simply because you're clumsy",
      AuthorId: 2,
      TagId: 3,
      createdAt: new Date(),
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
