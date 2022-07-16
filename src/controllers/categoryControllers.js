const services = require('../services');
const { controllerWrapper } = require('../helpers');

const addCategory = controllerWrapper(async (req, res) => {
  await services.tokenAuthentication(req.headers.authorization);

  const category = req.body;

  const addedCategory = await services.addCategory(category);

  return res.status(201).json(addedCategory);
});

const listCategories = controllerWrapper(async (req, res) => {
  await services.tokenAuthentication(req.headers.authorization);

  const categories = await services.listCategories();

  return res.status(200).json(categories);
});

module.exports = {
  addCategory,
  listCategories,
};