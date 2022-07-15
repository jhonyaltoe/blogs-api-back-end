const services = require('../services');
const { controllerWrapper } = require('../helpers');

const addCategory = controllerWrapper(async (req, res) => {
  await services.tokenAuthentication(req.headers.authorization);

  const category = req.body;

  const addedCategory = await services.addCategory(category);

  return res.status(201).json(addedCategory);
});

module.exports = {
  addCategory,
};