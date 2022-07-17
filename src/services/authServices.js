const { jwt, CustomError } = require('../helpers');
const { User } = require('../database/models');

const tokenAuthentication = async (token, toReturn) => {
  try {
    const { data: { email } } = jwt.decodeToken(token);

    if (toReturn) {
      const user = await User.findOne({
        where: email,
      });
      return user;
    }
  } catch (error) {
    console.log(error);

    throw new CustomError('Expired or invalid token', 401);
  }
};

module.exports = {
  tokenAuthentication,
};