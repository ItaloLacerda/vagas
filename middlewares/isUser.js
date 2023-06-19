const { tokenvalidation } = require('../utils/jwt/JwtMethods');

const isUser = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    tokenvalidation(authorization);
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token must be a valid token' });
  }
};

module.exports = { isUser };
