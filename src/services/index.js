const { userCreate, login, listUsers, getUserById } = require('./userServices');
const { tokenAuthentication } = require('./authServices');
const { addCategory, listCategories } = require('./categoryServices');
const { addPost, listAllOrGetOnePostsFromUser } = require('./postServices');
const { validateCategoryById } = require('./validationServices');

module.exports = {
  userCreate,
  login,
  tokenAuthentication,
  listUsers,
  getUserById,
  addCategory,
  listCategories,
  addPost,
  validateCategoryById,
  listAllOrGetOnePostsFromUser,
};