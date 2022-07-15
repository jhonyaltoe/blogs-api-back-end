const bcrypt = require('bcrypt');
const { User } = require('../database/models');
const { jwt, CustomError } = require('../helpers');

const login = async ({ email, password }) => {
  const userInfo = await User.findOne({ where: { email } });

  if (!userInfo) throw new CustomError('Invalid fields', 400);

  const errorPass = bcrypt.compareSync(password, userInfo.password);

  if (!errorPass) throw new CustomError('Invalid fields', 400);

  const token = jwt.generateToken(email);

  return token;
};

const userCreate = async (body) => {
  const hashedPassword = await bcrypt.hash(body.password, 10);
  
  const [user, created] = await User.findOrCreate({
    where: { email: body.email },
    defaults: { ...body, password: hashedPassword },
  });
  
  if (!created) throw new CustomError('User already registered', 409);

  const { password, ...rest } = user;

  const token = jwt.generateToken(rest);

  return token;
};

const listUsers = async () => {
  const users = User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: 'password' },
  });

  if (!user) throw new CustomError('User does not exist', 404);
  return user;
};

module.exports = {
  userCreate,
  login,
  listUsers,
  getUserById,
};