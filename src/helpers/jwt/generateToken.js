const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (payload) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  console.log('GENERATE', payload);
  const token = jwt.sign(payload, process.env.JWT_SECRET, jwtConfig);
  return token;
};