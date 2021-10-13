'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('productSizes', { 
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
      sizeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model:"sizes",
          id:"id"
        }
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('productSizes');
  }
};
