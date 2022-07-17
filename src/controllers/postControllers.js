const services = require('../services');
const { controllerWrapper } = require('../helpers');

const addPost = controllerWrapper(async (req, res) => {
  await services.validateCategoryById(req.body.categoryIds);
  const user = await services.tokenAuthentication(req.headers.authorization, true);

  const { id } = user;
  const post = req.body;

  const addedPost = await services.addPost(id, post);
  console.log('CONTROLLER', addedPost);
  return res.status(201).json(addedPost);
});

const listAllPostsFromUser = controllerWrapper(async (req, res) => {
  const user = await services.tokenAuthentication(req.headers.authorization, true);
  const posts = await services.listAllOrGetOnePostsFromUser(user);
  return res.status(200).json(posts);
});

const getPostById = controllerWrapper(async (req, res) => {
  const user = await services.tokenAuthentication(req.headers.authorization, true);
  const { id } = req.params;
  const post = await services.listAllOrGetOnePostsFromUser(user, id);
  return res.status(200).json(post);
});

module.exports = {
  addPost,
  listAllPostsFromUser,
  getPostById,
};