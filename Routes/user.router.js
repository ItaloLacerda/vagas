const express = require('express');

const {
  teste1, teste2, teste3, teste4,
} = require('../Controller');

const router = express.Router();

router.get('/', teste1.getUser, teste1.getUsers);
router.post('/', teste2.postUser);
router.delete('/', teste3.deleteUser);
router.put('/', teste4.updateUser);
// router.get("/users/access", teste5);

module.exports = router;
