let configBodyPartser = (express, app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};
module.exports = { configBodyPartser };
