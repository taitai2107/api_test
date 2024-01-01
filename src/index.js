const express = require("express");
const app = express();
require("express-async-errors");
const { testConnect } = require("./config/connect");
const { UseRouter } = require("../src/routes/index");
require("dotenv").config();
const bodyConfig = require("./config/body_partser");
bodyConfig.configBodyPartser(express, app);
const { configCors } = require("../src/config/cors");
configCors(app);
const PORT = process.env.PORT || 3000;
UseRouter(app);
// testConnect();
app.listen(PORT, () => {
  console.log(`app listen on port ${PORT}`);
});
