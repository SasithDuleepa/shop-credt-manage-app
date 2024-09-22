const DB = require('../../config/dataBase')

const SearchCustomer = (req,res) => {
    const {search } = req.params;
    const sql = `SELECT * FROM customers WHERE customer_name LIKE '%${search}%' OR customer_nic LIKE '%${search}%' OR customer_contact_no LIKE '%${search}%' LIMIT 10`;
    DB.connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ msg: "Internal server error" });
        }
        if (result.length > 0) {
            return res.status(200).json(result);
        } else {
            return res.status(404).json({ msg: "Customer not found" });
        }
    });
    // return res.status(200).json({ msg: "Customer found" }); // for testing
};
module.exports = SearchCustomer;