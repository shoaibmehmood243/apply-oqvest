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
        this.created_at = obj.created_at || new Date().toISOString().replace("T", " ").split(".")[0]
    }
}

Assets.GetAssets = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `SELECT * FROM loan_app_assets WHERE loan_application_id=?`;
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

Assets.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO loan_app_assets SET ?`;
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
            const query = `DELETE FROM loan_app_assets WHERE id=?`;
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

Assets.Update = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { id, ...formData } = data;
            const query =
                `UPDATE loan_app_assets SET ` +
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

module.exports = Assets;