const Joi = require('joi');

module.exports = Joi.object().keys({
  email: Joi
    .string()
    .email()
    .required()
    .messages({
      'any.required': 'Some required fields are missing',
      'string.empty': 'Some required fields are missing',
    }),
  password: Joi
    .string()
    .required()
    .messages({
      'any.required': 'Some required fields are missing',
      'string.empty': 'Some required fields are missing',
    }),
});