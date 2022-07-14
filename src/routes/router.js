const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.route('/user')
  .post(middlewares.validateUserCreate, controllers.userCreate);

module.exports = router;