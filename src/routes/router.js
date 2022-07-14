const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.route('/user')
  .post(controllers.userCreate);

module.exports = router;