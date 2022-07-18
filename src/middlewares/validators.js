const { Joi, CustomError } = require('../helpers');

const validateUserCreate = (req, _res, next) => {
  const { image, ...rest } = req.body;
  const { error } = Joi.userCreateSchema.validate(rest);

  if (error) {
    error.status = 400;
    next(error);
  }
  return next();
};

const validateToken = (req, _res, next) => {
  if (!req.headers.authorization) throw new CustomError('Token not found', 401);
  next();
};

const validateLogin = (req, _res, next) => {
  const { error } = Joi.loginSchema.validate(req.body);

  if (error) {
    error.status = 400;
    next(error);
  }
  return next();
};

const validateAddCategory = (req, _res, next) => {
  if (!req.body.name) throw new CustomError('"name" is required', 400);
  return next();
};

const validateAddPost = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds || categoryIds.length === 0) {
    throw new CustomError('Some required fields are missing', 400);
  }
  return next();
};

const validateUpdatePost = (req, _res, next) => {
  const { title, content } = req.body;
  if (!title || !content || title.length === 0 || content.length === 0) {
    throw new CustomError('Some required fields are missing', 400);
  }
  return next();
};

module.exports = {
  validateUserCreate,
  validateToken,
  validateLogin,
  validateAddCategory,
  validateAddPost,
  validateUpdatePost,
};