const express = require('express');

const { teste1, teste2 } = require('../Controller');

const router = express.Router();

router.get('/', teste1.getUser, teste1.getUsers);
router.post('/', teste2.postUser);
// router.delete("/users", teste3)
// router.put("/users", teste4)
// router.get("/users/access", teste5);

module.exports = router;
