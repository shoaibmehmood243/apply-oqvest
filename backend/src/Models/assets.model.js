const db = require("../Utilities/dbConfig");

class Assets {
    loan_application_id;
    asset_type;
    mutual_fund;
    market_value;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.asset_type = obj.asset_type,
        this.mutual_fund = obj.mutual_fund,
        this.market_value = obj.market_value,
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
                    resolve(sqlresult)
                }
            })
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = Assets;