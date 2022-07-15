const { jwt, CustomError } = require('../helpers');
const { User } = require('../database/models');

const tokenAuthentication = async (token) => {
  try {
    const { data: { email } } = jwt.decodeToken(token);
  
    const user = await User.findOne({
      where: email,
    });

    return user;
  } catch (error) {
    console.log(error);

    throw new CustomError('Expired or invalid token', 401);
  }
};

module.exports = {
  tokenAuthentication,
};