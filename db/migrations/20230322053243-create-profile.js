"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        type: Sequelize.TEXT,
      },
      tanggallahir: {
        type: Sequelize.DATE,
      },
      usia: {
        type: Sequelize.INTEGER,
      },
      whatsapp: {
        type: Sequelize.STRING,
      },
      asalkota: {
        type: Sequelize.STRING,
      },
      pendidikan: {
        type: Sequelize.STRING,
      },
      foto500: {
        type: Sequelize.STRING,
      },
      foto1000: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Profiles");
  },
};
