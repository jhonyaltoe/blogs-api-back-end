const { Joi } = require('../helpers');

module.exports = (req, _res, next) => {
  const { error } = Joi.loginSchema.validate(req.body);

  if (error) {
    error.status = 400;
    next(error);
  }

  next();
};