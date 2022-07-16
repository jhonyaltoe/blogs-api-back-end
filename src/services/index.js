const { userCreate, login, listUsers, getUserById } = require('./userServices');
const { tokenAuthentication } = require('./authServices');
const { addCategory, listCategories } = require('./categoryServices');
const { addPost } = require('./postServices');

module.exports = {
  userCreate,
  login,
  tokenAuthentication,
  listUsers,
  getUserById,
  addCategory,
  listCategories,
  addPost,
};