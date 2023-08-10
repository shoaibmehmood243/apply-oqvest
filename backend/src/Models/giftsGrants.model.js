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
        this.created_at = obj.created_at || new Date().toISOString().replace("T", " ").split(".")[0]
    }
}

GiftsGrants.GetGifts = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `SELECT * FROM loan_app_gifts_grants WHERE loan_application_id=?`;
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

GiftsGrants.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO loan_app_gifts_grants SET ?`;
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

GiftsGrants.Delete = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `DELETE FROM loan_app_gifts_grants WHERE id=?`;
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

GiftsGrants.Update = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { id, ...formData } = data;
            const query =
                `UPDATE loan_app_gifts_grants SET ` +
                Object.keys(formData)
                    .map((key) => `${key} = ?`)
                    .join(", ") +
                ` WHERE ?`;
            const parameters = [...Object.values(formData), { id }];
            db.query(query, parameters, (err, sqlresult) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(sqlresult);
                }
            })
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = GiftsGrants;