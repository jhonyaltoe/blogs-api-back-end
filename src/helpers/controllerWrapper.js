module.exports = (callBack) => async (req, res, next) => {
  try {
    return await callBack(req, res, next);
  } catch (err) {
    if (!err.status) err.status = 500;
    return next(err);
  }
};
