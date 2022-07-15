const { userCreate, listUsers, login, getUserById } = require('./userControllers');
const { addCategory } = require('./categoryControllers');

module.exports = {
  userCreate,
  login,
  listUsers,
  getUserById,
  addCategory,
};