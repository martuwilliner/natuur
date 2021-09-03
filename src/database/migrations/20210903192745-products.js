'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', { 
      id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(2),
        allowNull: false,
      },
      oferts: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      typeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model:"types",
          id:"id"
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model:"categories",
          id:"id"
        }
      }
     });
  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.dropTable('products');
    
  }
};
