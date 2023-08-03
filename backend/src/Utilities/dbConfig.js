const mysql = require("mysql");

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'apply'
// });
// const db = mysql.createPool({
//     host: '191.101.13.52',
//     user: 'u116608330_apply_oqvest',
//     password: 'Temppass@22',
//     database: 'u116608330_apply_oqvest'
// });
const db = mysql.createPool({
    host: '209.126.10.187',
    user: 'oqvestllc',
    password: 'root@12345!',
    database: 'oqvestmaindb'
});
db.getConnection((err, connection)=> {
    if(err) {
        console.log(err);
    } else {
        console.log('DB connection successfull')
    }
})

module.exports = db;