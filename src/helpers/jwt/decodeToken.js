const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};