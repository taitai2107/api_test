"use strict";
const { Model, STRING, FLOAT } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DongVat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DongVat.init(
    {
      idDongVat: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nameDongVat: {
        type: DataTypes.STRING,
        validate: {
          isUnique: async (value) => {
            let ans = await DongVat.findOne({
              where: {
                nameDongVat: value,
              },
            });
            if (ans) {
              throw new Error("động vật này đã tồn tại");
            }
          },
        },
      },

      imgDongVat: DataTypes.STRING,
      nguonGoc: DataTypes.STRING,
      giaBan: DataTypes.FLOAT,
      idLoai: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "DongVat",
      modelName: "DongVat",
    }
  );
  return DongVat;
};
