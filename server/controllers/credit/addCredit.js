const DB = require('../../config/dataBase')
const AddCredit = (req,res) =>{
    const {customer_id, credit_amount, payable_amount} = req.body;
    DB.connection.query(`INSERT INTO credit (customer_id, credit_amount, date, user_id) VALUES ('${customer_id}', ${credit_amount}, '${req.date}','${req.user}')`, (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
    return
};
module.exports = AddCredit;