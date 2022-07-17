const { BlogPost, sequelize, User, Category } = require('../database/models');
const { CustomError } = require('../helpers');

const addPost = async (userId, post) => {
  const result = await sequelize.transaction(async (t) => {
    const { title, content, categoryIds } = post;
    const createdPost = await BlogPost.create({
      title,
      content,
      userId,
    }, { transaction: t });

    await createdPost.addCategory(categoryIds, { transaction: t });

    return createdPost;
  });
  return result;
};

const listAllOrGetOnePostsFromUser = async (user, postId) => {
  const { id: userId } = user;
  const where = postId ? { userId, id: postId } : { userId };
  const posts = await BlogPost[postId ? 'findOne' : 'findAll']({
    where,
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!posts) throw new CustomError('Post does not exist', 404);
  return posts;
};

module.exports = {
  addPost,
  listAllOrGetOnePostsFromUser,
};