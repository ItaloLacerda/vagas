const fakeData = require('../fakeData');

const findAll = () => fakeData;

const findOne = (name) => {
  for (let i = 0; i < fakeData.length; i += 1) {
    if (fakeData[i].name === name.replace('_', ' ')) {
      return [fakeData[i]];
    }
  }

  return [];
};

const postUser = (newUser) => {
  const id = fakeData[fakeData.length - 1].id + 1;

  fakeData.push({ id, ...newUser });

  return { id, ...newUser };
};

module.exports = {
  findAll,
  findOne,
  postUser,
};
