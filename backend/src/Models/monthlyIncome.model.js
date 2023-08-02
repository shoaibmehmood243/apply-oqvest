const db = require("../Utilities/dbConfig");

class MonthlyIncome {
    loan_application_id;
    income_type;
    monthly_income_amount;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.income_type = obj.income_type,
        this.monthly_income_amount = obj.monthly_income_amount,
        this.created_at = obj.created_at || new Date().toISOString()
    }
}

MonthlyIncome.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO other_income SET ?`;
            db.query(query, data, (err, sqlresult) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        id: sqlresult.insertId
                    })
                }
            })
        } catch (error) {
            reject(error);
        }
    })
}

MonthlyIncome.Delete = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `DELETE FROM other_income WHERE monthly_income_id=?`;
            db.query(query, id, (err, sqlresult) => {
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

module.exports = MonthlyIncome;