const { BlogPost, sequelize, PostCategory } = require('../database/models');
// const { CustomError } = require('../helpers');

const addPost = async (userId, post) => {
  await sequelize.transaction(async (t) => {
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
};

module.exports = {
  addPost,
};