"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ChiTietHoaDon", {
      idChiTietHoaDon: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idHoaDon: {
        type: Sequelize.INTEGER,
      },
      idSanPham: {
        type: Sequelize.INTEGER,
      },
      soLuong: {
        type: Sequelize.INTEGER,
      },
      giaBan: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable("ChiTietHoaDon");
  },
};
