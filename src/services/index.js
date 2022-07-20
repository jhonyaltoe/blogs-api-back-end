const { userCreate, login, listUsers, getUserById, deleteUser } = require('./userServices');
const { addCategory, listCategories } = require('./categoryServices');
const { validateCategoryById } = require('./validationServices');
const {
  addPost,
  listAllOrGetOnePostsFromUser,
  updatePost,
  deletePostById,
  getPostsBySearch,
} = require('./postServices');

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
  deletePostById,
  deleteUser,
  getPostsBySearch,
};