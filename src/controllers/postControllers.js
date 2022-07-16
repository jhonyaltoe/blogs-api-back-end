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

module.exports = {
  addPost,
};