'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('types', { 
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
       },
       typeName: {
         type: Sequelize.STRING,
         allowNull: false,
       }
      });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('types');

  }
};
