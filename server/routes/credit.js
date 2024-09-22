const express = require('express');
const Auth = require('../middleware/auth');
const AddCredit = require('../controllers/credit/addCredit');
const GetCreditByCustomerId = require('../controllers/credit/getCreditByCustomerId');

const router = express.Router();

router.post('/add',Auth, AddCredit);
router.get('/get/:customerId', Auth, GetCreditByCustomerId);

module.exports = router;