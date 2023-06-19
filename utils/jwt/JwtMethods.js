const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createToken = (payload) => {
  const jwtConfig = {
    expiresIn: '12h',
    algorithm: 'HS256',
  };

  return jwt.sign(payload, secret, jwtConfig);
};

const tokenvalidation = (token) => jwt.verify(token, secret);

module.exports = {
  createToken,
  tokenvalidation,
};
