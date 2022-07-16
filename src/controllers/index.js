const { userCreate, listUsers, login, getUserById } = require('./userControllers');
const { addCategory, listCategories } = require('./categoryControllers');
const { addPost } = require('./postControllers');

module.exports = {
  userCreate,
  login,
  listUsers,
  getUserById,
  addCategory,
  listCategories,
  addPost,
};