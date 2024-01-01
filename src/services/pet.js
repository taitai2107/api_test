let db = require("../models/index");
let handleInSertPet = async (name, nguongoc, giaban, idloai, path) => {
  try {
    let createPet = await db.DongVat.create({
      nameDongVat: name,
      imgDongVat: path,
      nguonGoc: nguongoc,
      giaBan: giaban,
      idLoai: idloai,
    });

    if (createPet) {
      return {
        EC: 0,
        EM: "create successfully !",
      };
    }
  } catch (error) {
    // console.log(error);
    if (error.name === "SequelizeValidationError") {
      throw {
        EC: -1,
        EM: error.errors[0].message,
      };
    }
    throw {
      EC: -1,
      EM: "error server",
    };
  }
};
let handleFindPet = async (id) => {
  try {
    console.log("check id : ", id);
    let pet = await db.DongVat.findOne({
      where: {
        idDongVat: id,
      },
    });
    console.log(pet);
    if (!pet) {
      return {
        EC: -1,
        EM: "id của pet không tồn tại",
      };
    } else {
      return {
        EC: 0,
        EM: pet,
      };
    }
  } catch (error) {
    // console.log(error);
    throw {
      EC: -1,
      EM: "error sever",
    };
  }
};
module.exports = {
  handleInSertPet,
  handleFindPet,
};
