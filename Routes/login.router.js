const express = require('express');

const { loginController } = require('../Controller');

const router = express.Router();

router.post('/', loginController.loginUser);

module.exports = router;
