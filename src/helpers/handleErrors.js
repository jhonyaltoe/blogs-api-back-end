const { CustomError } = require('.');

module.exports = (message, status, ...errors) => {
  console.log(errors);
  const error = errors.some((bool) => !bool);

  if (error) throw new CustomError(message, status);

  return error;
};