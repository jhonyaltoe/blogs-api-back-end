const { Joi } = require('../helpers');

module.exports = (req, _res, next) => {
  const { image, ...rest } = req.body;
  const { error } = Joi.userCreateShema.validate(rest);

  if (error) {
    error.status = 400;
    next(error);
  }

  return next();
};