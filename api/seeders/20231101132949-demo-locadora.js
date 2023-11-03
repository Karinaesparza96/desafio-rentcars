"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "LOCADORA",
      [
        {
          id: "1",
          nome: "Localiza",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "2",
          nome: "Movida",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "3",
          nome: "Foco",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "4",
          nome: "Unidas",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "5",
          nome: "Fleet Solutions",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "6",
          nome: "Hertz",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "7",
          nome: "National Car Rental",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "8",
          nome: "Alugue Brasil",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("LOCADORA", null, {});
  },
};
