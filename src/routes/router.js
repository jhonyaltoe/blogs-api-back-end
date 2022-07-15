const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.route('/user')
  .post(middlewares.validateUserCreate, controllers.userCreate);

router.route('/login')
  .post(middlewares.validateLogin, controllers.login);

module.exports = router;