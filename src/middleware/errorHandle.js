const errorHandler = (err, req, res, next) => {
  console.log("ERROR LOG ", new Date().toLocaleString());
  console.log("Request:", req.method, req.originalUrl);
  console.log("Params:", req.params);
  console.log("Body:", req.body);
  console.log("Query:", req.query);
  console.log("Error: ", err);
  console.log("Error stack: ", err.stack);
  console.log(
    "--------------------------------------------------------------------------------------"
  );

  const messageError = err.messageObject || err.message;
  // create format error response
  const error = {
    // cục này là response
    status: "Error",
    error: messageError,
  };
  const status = err.status || 400;
  console.log("check error", error);
  return res.status(status).json(error);
};
const notFindApi = (req, res, next) => {
  res.status(404);
  res.json({
    status: 404,
    error: "not found api or method ",
  });
};

module.exports = { errorHandler, notFindApi };
