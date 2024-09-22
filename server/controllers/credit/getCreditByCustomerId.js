const DB = require('../../config/dataBase');
const GetCreditByCustomerId = (req,res) => {
    const customerId = req.params.customerId
    DB.connection.query(`SELECT * FROM credit WHERE customer_id = '${customerId}'`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })

}
module.exports = GetCreditByCustomerId 