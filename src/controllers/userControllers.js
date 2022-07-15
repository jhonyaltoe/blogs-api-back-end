const services = require('../services');
const { controllerWrapper } = require('../helpers');

const login = controllerWrapper(async (req, res) => {
  const token = await services.login(req.body);
  return res.status(200).json({ token });
});

const userCreate = controllerWrapper(async (req, res) => {
  const token = await services.userCreate(req.body);
  return res.status(201).json({ token });
});

module.exports = {
  userCreate,
  login,
};