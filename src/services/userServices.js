const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const { CustomError } = require('../helpers');
require('dotenv').config();

const userCreate = async (body) => {
  const hashedPassword = await bcrypt.hash(body.password, 10);
  
  const [user, created] = await User.findOrCreate({
    where: {
      email: body.email,
    },
    defaults: { ...body, password: hashedPassword },
  });
  
  if (!created) throw new CustomError('User already registered', 409);

  const { password, ...rest } = user;
  const token = jwt.sign(rest, process.env.JWT_SECRET);
  return token;
};

module.exports = {
  userCreate,
};