"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ChiTietHoaDon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ChiTietHoaDon.init(
    {
      idChiTietHoaDon: DataTypes.INTEGER,
      idHoaDon: DataTypes.INTEGER,
      idSanPham: DataTypes.INTEGER,
      soLuong: DataTypes.INTEGER,
      giaBan: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "ChiTietHoaDon",
    }
  );
  return ChiTietHoaDon;
};
