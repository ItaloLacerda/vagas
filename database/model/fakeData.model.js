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

module.exports = {
  findAll,
  findOne,
};
