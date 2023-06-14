const { countData } = require('../fakeData');
const { findOne } = require('./fakeData.model');

const updateCount = (id) => {
  // Busca elemento dentro do array countData e retorna seu index caso não encontre retorna -1

  const index = countData.findIndex((count) => count.id === Number(id));

  if (index === -1) {
    const newCount = {
      id: Number(id),
      readings: 1,
    };
    countData.push(newCount);
    return newCount;
  }

  countData[index] = {
    ...countData[index],
    readings: countData[index].readings + 1,
  };

  return countData[index];
};

const getCount = (name) => {
  const user = findOne(name);

  if (user.length === 0) {
    return [];
  }

  const readings = countData.find((count) => count.id === user[0].id);

  if (readings) {
    return readings.readings;
  }

  return 0;
};

module.exports = {
  updateCount,
  getCount,
};
