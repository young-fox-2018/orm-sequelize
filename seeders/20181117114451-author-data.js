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
      
    return queryInterface.bulkInsert('Authors', [{
      first_name: "Aurora",
      last_name: "Aksnes",
      religion: "Catholic",
      gender: "female",
      age: "23",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: "Trevor",
      last_name: "Belmont",
      religion: "Catholic",
      gender: "male",
      age: "23",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: "Alucard",
      last_name: "Tepes",
      religion: "Christian",
      gender: "male",
      age: "24",
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
