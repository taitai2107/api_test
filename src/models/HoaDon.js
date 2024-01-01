"use strict";
const { Model, INTEGER } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HoaDon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HoaDon.init(
    {
      idUser: DataTypes.INTEGER,
      nguoiNhan: DataTypes.STRING,
      diaChi: DataTypes.STRING,
      tongTien: DataTypes.FLOAT,
      trangThai: DataTypes.INTEGER,
      ngayDat: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "HoaDon",
    }
  );
  return HoaDon;
};
