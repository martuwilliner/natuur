'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        roll: 2,
        firstName: "Delfina",
        lastName: "Casarino",
        username: "delficasarino",
        email: "delficasarino@gmail.com",
        password: "$2b$10$nvK7VXbZsmHko2G/awaOFuAiUmnY.6iWqcVlqW16d4.qGvbeRQfbC"
      },
      {
        id: 2,
        roll: 1,
        firstName: "nombrecliente1",
        lastName: "apellidocliente1",
        username: "cliente1",
        email: "cliente1@gmail.com",
        password: "$2b$10$B3Q20C4K7brwRnX51Br14OBUJtlud46o.Yhm/5B7ajN.8.cBS0H3O"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
