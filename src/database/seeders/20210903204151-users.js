'use strict';
const bcrypt = require("bcrypt")
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
        password: bcrypt.hashSync("Delfi11!",10)
      },
      {
        id: 2,
        roll: 1,
        firstName: "nombrecliente1",
        lastName: "apellidocliente1",
        username: "cliente1",
        email: "cliente1@gmail.com",
        password: bcrypt.hashSync("Cliente11!",10)
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
