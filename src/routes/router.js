const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

// USER routes
router.route('/user/:id')
  .get(middlewares.validateToken, controllers.getUserById);

router.route('/user')
  .post(
    middlewares.validateUserCreate,
    controllers.userCreate,
  )
  .get(
    middlewares.validateToken,
    controllers.listUsers,
  );

// LOGIN routes
router.route('/login')
  .post(
    middlewares.validateLogin,
    controllers.login,
  );

// CATEGORIES routes
router.route('/categories')
  .post(
    middlewares.validateToken,
    middlewares.validateAddCategory,
    controllers.addCategory,
  )
  .get(
    middlewares.validateToken,
    controllers.listCategories,
  );

// POST routes
router.route('/post')
  .post(
    middlewares.validateToken,
    controllers.addPost,
  );

module.exports = router;