const cors = require("cors");
let configCors = (app) => {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
};
module.exports = {
  configCors,
};
