const { BlogPost, sequelize, User, Category } = require('../database/models');

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

const listAllPostsFromUser = async (user) => {
  const { id } = user;
  const posts = await BlogPost.findAll({
    where: { userId: id },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { 
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return posts;
};

module.exports = {
  addPost,
  listAllPostsFromUser,
};