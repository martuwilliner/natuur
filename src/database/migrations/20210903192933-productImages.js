'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('productImages', { 
      id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model:"products",
          id:"id"
        }
      },
      imageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model:"images",
          id:"id"
        }
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('productImages');
  }
};
