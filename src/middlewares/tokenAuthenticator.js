const jwt = require('jsonwebtoken');
const { CustomError } = require('../helpers');

const secret = process.env.JWT_SECRET || 'secretJWT'

module.exports = (req, _res, next) => {
  if (!req.headers.authorization) throw new CustomError('Token not found', 401);

  try {
    const data = jwt.verify(req.headers.authorization, secret);
    req.body.user = data;
    next();
  } catch (error) {
    console.log(error);
    throw new CustomError('Expired or invalid token', 401);
  }
};