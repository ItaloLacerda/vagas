const express = require('express');

const { teste1 } = require('../Controller');

const router = express.Router();

router.get('/', teste1.getUser);

// router.get('/', );

// router.post("/users", teste2)
// router.delete("/users", teste3)
// router.put("/users", teste4)
// router.get("/users/access", teste5);

module.exports = router;
