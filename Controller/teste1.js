const { teste1 } = require('../Service');

const getUser = (req, res, next) => {
  const { name } = req.query;
  const user = teste1.getUser(name);

  if (user.type === 'NOT FOUND') {
    return next();
  }

  return res.status(200).json(user.response);
};

const getUsers = (_req, res) => res.status(200).json(teste1.getUsers().response);

module.exports = {
  getUser,
  getUsers,
};
