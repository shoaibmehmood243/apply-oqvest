const mysql = require("mysql");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apply'
});

db.getConnection((err, connection)=> {
    if(err) {
        console.log(err);
    } else {
        console.log('DB connection successfull')
    }
})

module.exports = db;