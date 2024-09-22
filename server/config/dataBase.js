const mysql = require('mysql2');




class Database {
    constructor(){
        this.connection = mysql.createConnection({
            host: '127.0.0.1',
        user: 'root',
        database: 'shop',
        password: 'root'
    });
    }




    connect(){
        this.connection.connect((err)=>{
            if(err) {
                console.log(err);
                return;
            }
            console.log('Connected to database');
            });
        }

    disconnect(){
        this.connection.end((err)=>{            
            if(err) {
                console.log('Error disconnecting from database');
                return;
            }
            console.log('Disconnected from database');
            });
        }
}

module.exports = new Database;

