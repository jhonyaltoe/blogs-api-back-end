const bcrypt = require('bcrypt');
const { User } = require('../database/models');

const userCreate = async ({ password, email, displayName, image }) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    email,
    password: hashedPassword,
    displayName,
    image,
  });
};

module.exports = {
  userCreate,
};