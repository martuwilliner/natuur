'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', { 
      id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
      },
      categoryName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryStyle: {
        type: Sequelize.STRING,
        allowNull: false,
      }
     });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
