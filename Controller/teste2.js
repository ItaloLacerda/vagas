const { teste2 } = require('../Service');

const postUser = (req, res) => {
  const { name, job } = req.body;

  const newUser = teste2.postUser({ name, job });

  if (newUser.type === '') {
    return res.status(201).json(newUser.response);
  }

  return res.status(422).json(newUser);
};

module.exports = {
  postUser,
};
