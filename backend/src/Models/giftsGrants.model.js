const db = require("../Utilities/dbConfig");

class GiftsGrants {
    loan_application_id;
    type;
    source;
    amount;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.type = obj.type,
        this.source = obj.source,
        this.amount = obj.amount,
        this.created_at = obj.created_at || new Date().toISOString()
    }
}

GiftsGrants.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO gifts_grants SET ?`;
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

module.exports = GiftsGrants;