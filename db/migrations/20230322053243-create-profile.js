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
      name: {
        type: Sequelize.TEXT,
      },
      date: {
        type: Sequelize.DATE,
      },
      usia: {
        type: Sequelize.INTEGER,
      },
      mobile: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      education: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      image1000: {
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
