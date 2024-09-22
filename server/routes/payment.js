const express = require('express');
const Auth = require('../middleware/auth');

const AddPayment = require('../controllers/payment/addPayment');

const router = express.Router();

router.post('/add',Auth, AddPayment);

module.exports = router;