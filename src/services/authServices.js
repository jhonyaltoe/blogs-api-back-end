const jwt = require('jsonwebtoken');
const { CustomError } = require('../helpers');
require('dotenv').config();

const tokenAuthentication = async (token) => {
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    console.log(error);

    throw new CustomError('Expired or invalid token', 401);
  }
};

module.exports = {
  tokenAuthentication,
};