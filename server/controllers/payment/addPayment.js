const DB = require('../../config/dataBase')

const AddPayment = (req,res) => {
    console.log(req.body)

    const { customer_id, payment} = req.body;
    
    if(payment.length > 0){
        payment.forEach(element => {
            DB.connection.query(`INSERT INTO payment (credit_id, payment_amount, payment_date, payment_user_id, payment_status) VALUES (${element._id}, ${element.payment}, '${req.date}' , '${req.user}', 'ok')`, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(result)
                }
            })

            DB.connection.query(`UPDATE credit SET payable_amount = payable_amount- ${element.payment} WHERE _id = ${element._id}`, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(result)
                }
            })
        });
    }


};
module.exports = AddPayment;