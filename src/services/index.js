const { userCreate, login, listUsers, getUserById } = require('./userServices');
const { tokenAuthentication } = require('./authServices');
const { addCategory } = require('./categoryServices');

module.exports = {
  userCreate,
  login,
  tokenAuthentication,
  listUsers,
  getUserById,
  addCategory,
};