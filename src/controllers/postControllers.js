const services = require('../services');
const { controllerWrapper } = require('../helpers');

const addPost = controllerWrapper(async (req, res) => {
  await services.validateCategoryById(req.body.categoryIds);

  const { user } = req.body;
  const { id } = user;

  const post = req.body;
  console.log('PASSEI AQUI!');
  const addedPost = await services.addPost(id, post);
  console.log('CONTROLLER', addedPost);
  return res.status(201).json(addedPost);
});

const listAllPostsFromUser = controllerWrapper(async (req, res) => {
  const { user } = req.body;
  const posts = await services.listAllOrGetOnePostsFromUser(user);
  return res.status(200).json(posts);
});

const getPostById = controllerWrapper(async (req, res) => {
  const { user } = req.body;
  const { id } = req.params;
  const post = await services.listAllOrGetOnePostsFromUser(user, id);
  return res.status(200).json(post);
});

const updatePost = controllerWrapper(async (req, res) => {
  const { user, ...newPost } = req.body;
  const { id: postId } = req.params;

  const updatedPost = await services.updatePost(user.id, postId, newPost);
  return res.status(200).json(updatedPost);
});

module.exports = {
  addPost,
  listAllPostsFromUser,
  getPostById,
  updatePost,
};