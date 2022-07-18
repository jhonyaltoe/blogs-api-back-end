const errorHanddler = require('./errorHanddler');
const controllerWrapper = require('../helpers/controllerWrapper');
const {
  validateUserCreate,
  validateToken,
  validateLogin,
  validateAddCategory,
  validateAddPost,
  validateUpdatePost,
} = require('./validators');
const tokenAuthenticator = require('./tokenAuthenticator');

module.exports = {
  errorHanddler,
  controllerWrapper,
  validateUserCreate,
  validateLogin,
  validateToken,
  validateAddCategory,
  validateAddPost,
  validateUpdatePost,
  tokenAuthenticator,
};