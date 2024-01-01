module.exports = class validationsError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
};
