const express = require("express");
const router = express.Router();

let cloud = require("../middleware/cloudinary");
let apiPetController = require("../controllers/apiPetController");
router.post("/hi", cloud.single("image"), (req, res) => {
  console.log(req.file);
  res.send("ok");
});
router.post("/insertPet", cloud.single("image"), apiPetController.insertPet);
router.post("/findPet", apiPetController.findPet);
router.get("/findAll", apiPetController.findAll);

module.exports = router;
