const db = require("../Utilities/dbConfig");

class Assets {
    loan_application_id;
    asset_type;
    account_name;
    estimate_amount;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.asset_type = obj.asset_type,
        this.account_name = obj.account_name,
        this.estimate_amount = obj.estimate_amount,
        this.created_at = obj.created_at || new Date().toISOString()
    }
}

Assets.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO assets SET ?`;
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

Assets.Delete = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `DELETE FROM assets WHERE id=?`;
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

module.exports = Assets;