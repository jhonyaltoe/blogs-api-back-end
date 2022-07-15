const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.route('/user')
  .post(middlewares.validateUserCreate, controllers.userCreate)
  .get(middlewares.validateToken, controllers.listUsers);

router.route('/login')
  .post(middlewares.validateLogin, controllers.login);

module.exports = router;