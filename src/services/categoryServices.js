const { Category } = require('../database/models');
const { CustomError } = require('../helpers');

const addCategory = async ({ name }) => {
  const [category, created] = await Category.findOrCreate({
    where: { name },
    defaults: { name },
  });

  if (!created) throw new CustomError('Category already exists', 409);

  return category;
};

module.exports = {
  addCategory,
};