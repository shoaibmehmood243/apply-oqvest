const db = require("../Utilities/dbConfig");

class Borrowers {
    loan_application_id;
    borrower_first_name;
    borrower_middle_name;
    borrower_last_name;
    borrower_phone;
    borrower_email;
    borrower_martial_status;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.borrower_first_name = obj.borrower_first_name,
        this.borrower_middle_name = obj.borrower_middle_name,
        this.borrower_last_name = obj.borrower_last_name,
        this.borrower_phone = obj.borrower_phone,
        this.borrower_email = obj.borrower_email,
        this.borrower_martial_status = obj.borrower_martial_status,
        this.created_at = obj.created_at || new Date().toISOString()
    }
}

Borrowers.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO borrowers SET ?`;
            db.query(query, data, (err, sqlresult) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(sqlresult)
                }
            })
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = Borrowers;