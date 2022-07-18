const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

// USER routes
router.route('/user/me')
  .delete(
    middlewares.tokenAuthenticator,
    controllers.deleteUser,
  );

router.route('/user/:id')
  .get(middlewares.tokenAuthenticator, controllers.getUserById);

router.route('/user')
  .post(
    middlewares.validateUserCreate,
    controllers.userCreate,
  )
  .get(
    middlewares.tokenAuthenticator,
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
    middlewares.tokenAuthenticator,
    middlewares.validateAddCategory,
    controllers.addCategory,
  )
  .get(
    middlewares.tokenAuthenticator,
    controllers.listCategories,
  );

// POST routes
router.route('/post/:id')
  .get(
    middlewares.tokenAuthenticator,
    controllers.getPostById,
  )
  .put(
    middlewares.tokenAuthenticator,
    middlewares.validateUpdatePost,
    controllers.updatePost,
  )
  .delete(
    middlewares.tokenAuthenticator,
    controllers.deletePostById,
  );

router.route('/post')
  .post(
    middlewares.tokenAuthenticator,
    middlewares.validateAddPost,
    controllers.addPost,
  )
  .get(
    middlewares.tokenAuthenticator,
    controllers.listAllPostsFromUser,
  );

module.exports = router;