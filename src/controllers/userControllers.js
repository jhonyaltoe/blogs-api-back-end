const services = require('../services');
const { controllerWrapper } = require('../helpers');

const userCreate = controllerWrapper(async (req, res) => {
  await services.userCreate(req.body);
  return res.status(200).json('Funfou!');
});

module.exports = {
  userCreate,
};