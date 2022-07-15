const { CustomError } = require('../helpers');

module.exports = (req, _res, next) => {
  if (!req.body.name) throw new CustomError('"name" is required', 400);
  return next();
};