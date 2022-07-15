const { CustomError } = require('../helpers');

module.exports = (req, _res, next) => {
  if (!req.headers.authorization) throw new CustomError('Token not found', 401);
  next();
};