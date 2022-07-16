const { Category } = require('../database/models');
const { CustomError } = require('../helpers');

const validateCategoryById = async (payload) => {
  const result = await Category.findAll({
    where: { id: payload },
  });

  if (result.length === 0) throw new CustomError('"categoryIds" not found', 400);
};

module.exports = {
  validateCategoryById,
};