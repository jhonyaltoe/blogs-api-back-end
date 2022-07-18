const services = require('../services');
const { controllerWrapper } = require('../helpers');

const addCategory = controllerWrapper(async (req, res) => {
  const { user, ...category } = req.body;

  const addedCategory = await services.addCategory(category);

  return res.status(201).json(addedCategory);
});

const listCategories = controllerWrapper(async (req, res) => {
  const categories = await services.listCategories();
  return res.status(200).json(categories);
});

module.exports = {
  addCategory,
  listCategories,
};