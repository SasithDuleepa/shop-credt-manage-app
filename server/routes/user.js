const express = require('express');

const LogIn = require('../controllers/user/login');

const router = express.Router();

router.post('/login', LogIn);

module.exports = router;