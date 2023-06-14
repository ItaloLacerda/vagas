const { teste5 } = require('../Service');

const getCount = (req, res) => {
  const { name } = req.query;
  const readings = teste5.getCount(name);

  if (readings.type === 'NOT FOUND') {
    return res.status(404).json(readings);
  }

  return res.status(200).json(readings.response);
};

module.exports = {
  getCount,
};
