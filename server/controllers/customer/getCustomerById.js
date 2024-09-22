const DB = require('../../config/dataBase');
const GetCustomerById = (req,res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM customers WHERE customer_id = '${id}'`;
    DB.connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ msg: "Internal server error" });
        }
        if (result.length === 0) {
            return res.status(404).json({ msg: "Customer not found" });
        }
        return res.status(200).json(result[0]);
    });
    // get the data from the request
};
module.exports = GetCustomerById;