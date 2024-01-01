"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SanPham", {
      idSanPham: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tenSanPham: {
        type: Sequelize.STRING,
      },
      imgSanPham: {
        type: Sequelize.STRING,
      },
      giaBan: {
        type: Sequelize.FLOAT,
      },
      xuatXu: {
        type: Sequelize.STRING,
      },
      loaiId: {
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
    await queryInterface.dropTable("SanPham");
  },
};
