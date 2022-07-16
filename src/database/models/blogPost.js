'use strics';

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    content: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      defaultValue: false
    },
    published: {
      type: DataTypes.DATE,
    },
    updated: {
      type: DataTypes.DATE
    },
  }, {
    tableName: 'BlogPosts',
    createdAt: 'published',
    updatedAt: 'updated'
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    })
  };

  return BlogPost;
};