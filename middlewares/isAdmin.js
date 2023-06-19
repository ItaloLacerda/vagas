const { tokenvalidation } = require('../utils/jwt/JwtMethods');

const isAdmin = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const token = tokenvalidation(authorization);
    if (token.role === 'Admin') {
      return next();
    }
    return res.status(401).json({ error: 'Unauthorized user' });
  } catch (error) {
    return res.status(401).json({ error: 'Token must be a valid token' });
  }
};

module.exports = { isAdmin };
