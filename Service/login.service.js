const bcrypt = require('bcrypt');
const { getUser } = require('./teste1');
const { createToken } = require('../utils/jwt/JwtMethods');

const loginUser = async (user, password) => {
  const isUser = getUser(user);

  if (isUser.type === 'NOT FOUND') {
    return { type: 'NOT FOUND', response: 'Incorrect username or password' };
  }

  const match = await bcrypt.compare(password, isUser.response.password);

  if (match) {
    const payload = {};
    const listKeys = Object.entries(isUser.response);

    for (let index = 0; index < listKeys.length; index += 1) {
      const key = listKeys[index][0];

      if (key !== 'password') {
        payload[key] = isUser.response[key];
      }
    }

    return { type: '', response: { Authorization: createToken(payload) } };
  }

  return { type: 'NOT FOUND', response: 'Incorrect username or password' };
};

module.exports = {
  loginUser,
};
