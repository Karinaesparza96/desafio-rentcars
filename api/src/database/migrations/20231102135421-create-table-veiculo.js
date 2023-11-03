"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("VEICULO", {
      id: {
        type: Sequelize.UUID,
        defaultvalue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      id_locadora: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "LOCADORA", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      modelo: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      marca: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      motor: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      portas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cambio: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      ar_condicionado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        field: "created_at",
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        field: "updated_at",
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("VEICULO");
  },
};
