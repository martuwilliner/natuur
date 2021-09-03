'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('items', { 
      id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
      },
      productQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model:"products",
          id:"id"
        }
      },
      cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model:"carts",
          id:"id"
        }
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('items');
  }
};
