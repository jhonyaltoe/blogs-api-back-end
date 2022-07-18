const { jwt, CustomError } = require('../helpers');
// const { User } = require('../database/models');

const tokenAuthentication = async (token) => {
  try {
    const data = jwt.decodeToken(token);
    console.log('ATTH ==>', data);
    return data;
  } catch (error) {
    console.log(error);

    throw new CustomError('Expired or invalid token', 401);
  }
};

module.exports = {
  tokenAuthentication,
};