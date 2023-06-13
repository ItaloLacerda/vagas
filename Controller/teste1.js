const data = require('../fakeData');

const getUser = (req, res) => {
  const { name } = req.query;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].name === name) {
      res.send(data[i]);
    }
  }
};

const getUsers = (_req, res) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
