const { userCreate, login, listUsers, getUserById } = require('./userServices');
const { addCategory, listCategories } = require('./categoryServices');
const { addPost, listAllOrGetOnePostsFromUser, updatePost } = require('./postServices');
const { validateCategoryById } = require('./validationServices');

module.exports = {
  userCreate,
  login,
  listUsers,
  getUserById,
  addCategory,
  listCategories,
  addPost,
  validateCategoryById,
  listAllOrGetOnePostsFromUser,
  updatePost,
};