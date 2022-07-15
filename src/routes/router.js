const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.route('/user/:id')
  .get(middlewares.validateToken, controllers.getUserById);

router.route('/user')
  .post(middlewares.validateUserCreate, controllers.userCreate)
  .get(middlewares.validateToken, controllers.listUsers);

router.route('/login')
  .post(middlewares.validateLogin, controllers.login);

module.exports = router;