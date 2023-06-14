const { fakeDataModel } = require('../database/model');

const updateUser = (id, update) => {
  const checkArray = ['name', 'job'];
  const keys = Object.keys(update);
  const toCheck = JSON.stringify(checkArray) === JSON.stringify(keys);
  const thereAreValues = update.name && update.job;

  if (id && toCheck && thereAreValues) {
    const response = fakeDataModel.updateUser(id, update);
    if (response === 'Not found') {
      return { type: 'NOT FOUND', response: 'User not found' };
    }
    return { type: '', response };
  }

  return { type: 'UNREGISTERED USER', response: 'Unable to update user, check if all data was passed correctly' };
};

module.exports = {
  updateUser,
};
