'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('types', [
      {
        id: 1,
        typeName: "vegano"
      },
      {
        id: 2,
        typeName: "vegetariano"
      },
      {
        id: 3,
        typeName: "sin TACC"
      }
    ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    
    
    await queryInterface.bulkDelete('types', null, {});
    
  }
};
