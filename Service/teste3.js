const { fakeDataModel } = require('../database/model');

const deleteUser = (name) => {
  if (name) {
    const response = fakeDataModel.deleteUser(name);
    if (response === 'Not found') {
      return { type: 'NOT FOUND', response: 'User not found' };
    }
    return { type: '', response: 'Success' };
  }

  return { type: 'UNREGISTERED USER', response: 'Unable to delete user, check that all data was passed correctly' };
};

module.exports = {
  deleteUser,
};
