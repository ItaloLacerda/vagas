const { teste4 } = require('../Service');

const updateUser = (req, res) => {
  const { id } = req.query;
  const { name, job } = req.body;

  const response = teste4.updateUser(id, { name, job });

  if (response.type === 'NOT FOUND') {
    return res.status(404).json(response);
  } if (response.type === 'UNREGISTERED USER') {
    return res.status(400).json(response);
  }

  return res.status(200).json(response.response);
};

module.exports = {
  updateUser,
};
