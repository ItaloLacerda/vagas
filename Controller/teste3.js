const { teste3 } = require('../Service');

const deleteUser = (req, res) => {
  const { name } = req.query;

  const response = teste3.deleteUser(name);

  if (response.type === 'NOT FOUND') {
    return res.status(404).json(response);
  } if (response.type === 'UNREGISTERED USER') {
    return res.status(400).json(response);
  }

  return res.status(204).send();
};

module.exports = {
  deleteUser,
};
