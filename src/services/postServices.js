const { BlogPost, sequelize, PostCategory } = require('../database/models');

const addPost = async (userId, post) => {
  const result = await sequelize.transaction(async (t) => {
    const { title, content, categoryIds } = post;

    const createdPost = await BlogPost.create({
      title,
      content,
      userId,
    }, { transaction: t });

    const postAndCategoriesArr = categoryIds.map((categoryId) => ({
      postId: createdPost.id,
      categoryId,
    }));

    await PostCategory.bulkCreate(postAndCategoriesArr, { transaction: t });
    return createdPost;
  });

  return result;
};

module.exports = {
  addPost,
};