const { fakeData } = require('../fakeData');

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

const deleteUser = (name) => {
  for (let i = 0; i < fakeData.length; i += 1) {
    if (fakeData[i].name === name.replace('_', ' ')) {
      fakeData.splice(i, 1);
      return 'Success';
    }
  }
  return 'Not found';
};

const updateUser = (id, update) => {
  const index = fakeData.findIndex((user) => user.id === Number(id));
  if (index === -1) {
    return 'Not found';
  }
  fakeData[index] = {
    ...fakeData[index],
    ...update,
  };

  return fakeData[index];
};

module.exports = {
  findAll,
  findOne,
  postUser,
  deleteUser,
  updateUser,
};
