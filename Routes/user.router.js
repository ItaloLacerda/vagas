const express = require('express');

const { isUser, isAdmin } = require('../middlewares');
const {
  teste1, teste2, teste3, teste4, teste5,
} = require('../Controller');

const router = express.Router();

router.get('/', isUser, teste1.getUser, teste1.getUsers);
router.post('/', isUser, teste2.postUser);
router.delete('/', isUser, isAdmin, teste3.deleteUser);
router.put('/', isUser, isAdmin, teste4.updateUser);
router.get('/access', teste5.getCount);

module.exports = router;
