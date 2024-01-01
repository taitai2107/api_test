const api = require("../routes/api");
const errorHandler = require("../middleware/errorHandle");
const UseRouter = (app) => {
  app.use("/api/v1", api);
  app.use(errorHandler.notFindApi);
  app.use(errorHandler.errorHandler);
};
module.exports = {
  UseRouter,
};
