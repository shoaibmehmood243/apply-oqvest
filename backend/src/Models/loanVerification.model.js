const db = require("../Utilities/dbConfig");

class LoanVerification {
    loan_application_id;
    monthly_amount;
    total_expenses;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.monthly_amount = obj.monthly_amount,
        this.total_expenses = obj.total_expenses,
        this.created_at = obj.created_at || new Date().toISOString()
    }
}

LoanVerification.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO loan_verifications SET ?`;
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

module.exports = LoanVerification;