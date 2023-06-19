const { loginService } = require('../Service');

const loginUser = async (req, res) => {
  const { user, password } = req.body;

  const login = await loginService.loginUser(user, password);

  if (login.type === 'NOT FOUND') {
    return res.status(404).json(login);
  }

  return res.status(200).json(login.response);
};

module.exports = {
  loginUser,
};
