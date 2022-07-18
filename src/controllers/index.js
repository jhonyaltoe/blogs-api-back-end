const { userCreate, listUsers, login, getUserById, deleteUser } = require('./userControllers');
const { addCategory, listCategories } = require('./categoryControllers');
const {
  addPost,
  listAllPostsFromUser,
  getPostById,
  updatePost,
  deletePostById,
} = require('./postControllers');

module.exports = {
  userCreate,
  login,
  listUsers,
  getUserById,
  addCategory,
  listCategories,
  addPost,
  listAllPostsFromUser,
  getPostById,
  updatePost,
  deletePostById,
  deleteUser,
};