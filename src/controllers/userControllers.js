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

const listUsers = controllerWrapper(async (req, res) => {
  await services.tokenAuthentication(req.headers.authorization);

  const users = await services.listUsers();
  
  return res.status(200).json(users);
});

const getUserById = controllerWrapper(async (req, res) => {
  await services.tokenAuthentication(req.headers.authorization);

  const { id } = req.params;

  const user = await services.getUserById(id);

  return res.status(200).json(user);
});

module.exports = {
  userCreate,
  listUsers,
  login,
  getUserById,
};