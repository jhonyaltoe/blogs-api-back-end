const services = require('../services');
const { controllerWrapper } = require('../helpers');

const addPost = controllerWrapper(async (req, res) => {
  await services.validateCategoryById(req.body.categoryIds);
  const user = await services.tokenAuthentication(req.headers.authorization);

  const { id } = user;
  const post = req.body;
  console.log('PASSEI AQUI!');
  const addedPost = await services.addPost(id, post);
  console.log('CONTROLLER', addedPost);
  return res.status(201).json(addedPost);
});

const listAllPostsFromUser = controllerWrapper(async (req, res) => {
  const user = await services.tokenAuthentication(req.headers.authorization);
  const posts = await services.listAllOrGetOnePostsFromUser(user);
  return res.status(200).json(posts);
});

const getPostById = controllerWrapper(async (req, res) => {
  const user = await services.tokenAuthentication(req.headers.authorization);
  const { id } = req.params;
  const post = await services.listAllOrGetOnePostsFromUser(user, id);
  return res.status(200).json(post);
});

const updatePost = controllerWrapper(async (req, res) => {
  const user = await services.tokenAuthentication(req.headers.authorization);
  // console.log('CONTROLLER =======>', user);
  const { id: postId } = req.params;
  const newPost = req.body;
  const updatedPost = await services.updatePost(user.id, postId, newPost);
  return res.status(200).json(updatedPost);
});

module.exports = {
  addPost,
  listAllPostsFromUser,
  getPostById,
  updatePost,
};