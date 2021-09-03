'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('images', { 
      id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('images');
  }
};
