const db = require("../Utilities/dbConfig");

class Liabilities {
    loan_application_id;
    liability_type;
    account_number;
    owner;
    balance;
    payment;
    term_months;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.liability_type = obj.liability_type,
        this.account_number = obj.account_number,
        this.owner = obj.owner,
        this.balance = obj.balance,
        this.payment = obj.payment,
        this.term_months = obj.term_months,
        this.created_at = obj.created_at || new Date().toISOString()
    }
}

Liabilities.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO liabilities SET ?`;
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

module.exports = Liabilities;