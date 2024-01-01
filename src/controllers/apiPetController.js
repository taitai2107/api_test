const db = require("../models/index");
const servicePet = require("../services/pet");
const ServerError = require("../errors/severError");
const { all } = require("../routes/api");

let findPet = async (req, res) => {
  try {
    console.log(req.body);
    let pet = await servicePet.handleFindPet(req.body.id);
    console.log(pet);
    res.json(pet);
  } catch (error) {
    throw new ServerError(error);
  }
};

let insertPet = async (req, res, next) => {
  try {
    console.log("check body : ", req.body);
    let { name, nguongoc, giaban, idloai } = req.body;
    let path = req.file?.path;
    const newPet = await servicePet.handleInSertPet(
      name,
      nguongoc,
      giaban,
      idloai,
      path
    );
    if (newPet) {
      res.json("newPet");
    }
  } catch (error) {
    throw new ServerError(error);
  }
};
let findAll = async (req, res) => {
  try {
    let allPet = await db.DongVat.findAll();
    res.json({
      EC: 0,
      EM: allPet,
    });
  } catch (error) {
    throw new ServerError(error);
  }
};
module.exports = {
  findPet,
  insertPet,
  findAll,
};
