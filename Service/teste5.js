const { countDataModel } = require('../database/model');

const getCount = (name) => {
  if (name) {
    const readings = countDataModel.getCount(name);
    if (readings.length === 0) {
      return { type: 'NOT FOUND', response: 'User not found' };
    }
    return { type: '', response: `Usuário ${name.replace('_', ' ')}  foi lido ${readings} vezes.` };
  }

  return { type: 'NOT FOUND', response: 'User not found' };
};

module.exports = {
  getCount,
};
