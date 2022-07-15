const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (payload) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: payload }, process.env.JWT_SECRET, jwtConfig);
  return token;
};