'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        categoryName: "almacen", 
        categoryStyle: "/css/mainAlmacenProductDetail.css"
    },
    {
        id: 2,
        categoryName: "gourmet",
        categoryStyle: "/css/mainGourmetProductDetail.css"
    },
    {
        id: 3,
        categoryName: "cosmetica",
        categoryStyle: "/css/mainCosmeticaProductDetail.css"
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
