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

const updatePost = async (userId, id, newPost) => {
  const { title, content } = newPost;
  const updatedPost = await BlogPost.findOne({
    where: { userId, id },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
  
  if (!updatedPost) throw new CustomError('Unauthorized user', 401);
  await updatedPost.update({ title, content });
  return updatedPost;
};

const deletePostById = async (userId, id) => {
  const post = await BlogPost.findOne({ where: { id } });
  if (!post) throw new CustomError('Post does not exist', 404);
  if (post.dataValues.userId !== userId) throw new CustomError('Unauthorized user', 401);
  await post.destroy();
};

module.exports = {
  addPost,
  listAllOrGetOnePostsFromUser,
  updatePost,
  deletePostById,
};