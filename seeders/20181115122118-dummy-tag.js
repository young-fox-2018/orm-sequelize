'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Tags', [{
      name: 'Javascript',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Middleware',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Session',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Multer',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Functional Programming',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Asynchronous',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Synchronous',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Tags', null, {})
  }
};
