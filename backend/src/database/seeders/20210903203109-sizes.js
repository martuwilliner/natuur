'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sizes', [
      {
        id: 1,
        sizeName: "250gr"
      },
      {
        id: 2,
        sizeName: "500gr"
      },
      {
        id: 3,
        sizeName: "1kg"
      },
      {
        id: 4,
        sizeName: "250ml"
      },
      {
        id: 5,
        sizeName: "500ml"
      },
      {
        id: 6,
        sizeName: "1 litro"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sizes', null, {});
  }
};
