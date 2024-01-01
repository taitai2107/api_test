"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DongVat", {
      idDongVat: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameDongVat: {
        type: Sequelize.STRING,
      },
      imgDongVat: {
        type: Sequelize.STRING,
      },
      nguonGoc: {
        type: Sequelize.STRING,
      },
      giaBan: {
        type: Sequelize.FLOAT,
      },
      idLoai: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("DongVat");
  },
};
