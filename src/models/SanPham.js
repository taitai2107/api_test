"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SanPham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SanPham.init(
    {
      tenSanPham: DataTypes.STRING,
      imgSanPham: DataTypes.STRING,
      giaBan: DataTypes.FLOAT,
      xuatXu: DataTypes.STRING,
      loaiId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "SanPham",
    }
  );
  return SanPham;
};
