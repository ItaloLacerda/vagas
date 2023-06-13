const { fakeDataModel } = require('../database/model');

const getUser = (name) => {
  const user = fakeDataModel.findOne(name);

  if (user.length === 1) {
    return { type: '', response: user[0] };
  }

  return { type: 'NOT FOUND', response: 'User not found' };
};

const getUsers = () => {
  const users = fakeDataModel.findAll();
  return { type: '', response: users };
};

module.exports = {
  getUser,
  getUsers,
};
