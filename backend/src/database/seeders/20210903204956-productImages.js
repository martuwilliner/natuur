'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('productImages', [
      {
        productId: 3,
        imageId: 4
      },
      {
        productId: 4,
        imageId: 5
      },
      {
        productId: 5,
        imageId: 6
      },
      {
        productId: 6,
        imageId: 7
      },
      {
        productId: 6,
        imageId: 8
      },
      {
        productId: 7,
        imageId: 9
      },
      {
        productId: 8,
        imageId: 10
      },
      {
        productId: 8,
        imageId: 11
      },
      {
        productId: 10,
        imageId: 14
      },
      {
        productId: 11,
        imageId: 15
      }      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productImages', null, {});
  }
};
