const { fakeDataModel } = require('../database/model');

const postUser = ({ name, job }) => {
  if (name && job) {
    const newUser = fakeDataModel.postUser({ name, job });
    return { type: '', response: newUser };
  }

  return { type: 'UNREGISTERED USER', response: 'It was not possible to register a new user, check that all data has been passed correctly' };
};

module.exports = {
  postUser,
};
