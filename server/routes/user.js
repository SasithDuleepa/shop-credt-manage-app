const express = require('express');

const LogIn = require('../controllers/user/login');

const router = express.Router();

router.post('/', LogIn);

module.exports = router;