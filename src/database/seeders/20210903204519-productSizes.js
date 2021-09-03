'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('productSizes', [
      {
        productId: 3,
        sizeId: 1
      },
      {
        productId: 4,
        sizeId: 1
      },
      {
        productId: 5,
        sizeId: 1
      },
      {
        productId: 6,
        sizeId: 1
      },
      {
        productId: 7,
        sizeId: 2
      },
      {
        productId: 8,
        sizeId: 1
      },
      {
        productId: 10,
        sizeId: 1
      },
      {
        productId: 11,
        sizeId: 4
      }    
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productSizes', null, {});
  }
};
