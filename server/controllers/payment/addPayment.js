const DB = require('../../config/dataBase');

const executeQuery = (query, values = []) => {
    return new Promise((resolve, reject) => {
        DB.connection.query(query, values, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

const AddPayment = async (req, res) => {
    try {
        console.log(req.body);

        const { customer_id, payment } = req.body;
        const payment_date = req.date; // Assuming req.date is correctly set
        const payment_user_id = req.user; // Assuming req.user is correctly set


        if(payment >0){
            // Insert payment record
        const insertQuery = `INSERT INTO payment (payment_amount, payment_date, payment_user_id) VALUES (?, ?, ?)`;
        await executeQuery(insertQuery, [payment, payment_date, payment_user_id]);

        // Update credit table
        const updateQuery = `UPDATE customers SET total_payable = total_payable - ? WHERE customer_id = ?`;
        await executeQuery(updateQuery, [payment, customer_id]);

        res.status(200).json({ message: "Payment added successfully" });
        }else{
            res.status(204).json({ message: "check payment amount" });
        }

        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error processing payment", error });
    }
};

module.exports = AddPayment;
