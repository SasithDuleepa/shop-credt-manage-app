const DB = require('../../config/dataBase')

const AddCustomer = (req,res) => {
    console.log(req.user , req.date,req.body)
    // get the data from the request
    const { customer_name, customer_contact_no, customer_nic, customer_address } = req.body;

    if(customer_name === "" || customer_contact_no === "" || customer_nic === "" || customer_address === "" ){
        return res.status(400).json({msg: "Please fill all fields"})
    }else{
        //check if the customer already exists
        const sqlCheck = "SELECT * FROM customers WHERE customer_nic = ? AND customer_name = ?"
        DB.connection.query(sqlCheck, [customer_nic, customer_name], (err, result) => {
            if(err){
                console.log(err)
            }else{
                if(result.length > 0){
                    return res.status(400).json({msg: "Customer already exists"})
                }else{
                    // insert the data into the database
        const sql = "INSERT INTO customers ( customer_name, customer_contact_no, customer_nic, customer_address,  customer_add_date, customer_add_user_id, customer_status) VALUES (?,?,?,?,?,?,?)"
        DB.connection.query(sql, [customer_name, customer_contact_no, customer_nic, customer_address,  req.date , req.user, 'active'], (err, result) => {
            if(err){
                console.log(err)
            }else{
                return res.status(200).json({msg: "Customer added successfully"})
            }
        })
                }
            }
        })
        
    }
};

module.exports = AddCustomer;