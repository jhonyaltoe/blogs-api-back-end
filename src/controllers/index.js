const { userCreate, listUsers, login, getUserById } = require('./userControllers');

module.exports = {
  userCreate,
  login,
  listUsers,
  getUserById,
};