const express = require('express');
const Auth = require('../middleware/auth');

const AddCustomer = require('../controllers/customer/addCustomer');
const SearchCustomer = require('../controllers/customer/searchCustomer');
const GetCustomerById = require('../controllers/customer/getCustomerById');

const router = express.Router();

router.post('/add',Auth, AddCustomer);
router.get('/search/:search', Auth, SearchCustomer);
router.get('/get/:id', Auth, GetCustomerById);

module.exports = router;