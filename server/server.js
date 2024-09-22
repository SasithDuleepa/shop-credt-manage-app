const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors')
var bodyParser = require('body-parser')

const DB = require('./config/dataBase');


const User = require('./routes/user');
const Customer = require('./routes/customer');
const Credit = require('./routes/credit');
const Payment = require('./routes/payment');

const Auth = require('./middleware/auth');

DB.connect()

app.use(cors())
app.use(bodyParser.json())

app.use('/user', User);
app.use('/customer', Customer);
app.use('/credit', Credit);
app.use('/payment', Payment);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
