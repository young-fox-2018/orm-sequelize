'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors', [{
      first_name: 'Abdul',
      last_name: "Somad",
      religion: "Islam",
      gender: "Male",
      age: 45,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Bambang',
      last_name: "Somay",
      religion: "Islam",
      gender: "Male",
      age: 70,
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
