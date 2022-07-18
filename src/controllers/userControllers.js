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

const listUsers = controllerWrapper(async (_req, res) => {
  const users = await services.listUsers();
  return res.status(200).json(users);
});

const getUserById = controllerWrapper(async (req, res) => {
  const { id } = req.params;
  const user = await services.getUserById(id);
  return res.status(200).json(user);
});

const deleteUser = controllerWrapper(async (req, res) => {
  const { user } = req.body;
  await services.deleteUser(user.id);
  return res.status(204).json();
});

module.exports = {
  userCreate,
  listUsers,
  login,
  getUserById,
  deleteUser,
};