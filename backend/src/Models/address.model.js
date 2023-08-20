const db = require("../Utilities/dbConfig");

class Address {
    loan_application_id;
    primary_street_address;
    rent_owned;
    primary_housing_expense;
    duration_year;
    duration_month;
    mailing_street_address;
    type;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.primary_street_address = obj.primary_street_address,
        this.rent_owned = obj.rent_owned,
        this.primary_housing_expense = obj.primary_housing_expense,
        this.duration_year = obj.duration_year,
        this.duration_month = obj.duration_month,
        this.mailing_street_address = obj.mailing_street_address,
        this.type = obj.type,
        this.created_at = obj.created_at || new Date().toISOString().replace("T", " ").split(".")[0]
    }
}

Address.GetAddress = async (id, type) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `SELECT * FROM loan_app_addresses WHERE loan_application_id=? && type = '${type}'`;
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

Address.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO loan_app_addresses SET ?`;
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

Address.Delete = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `DELETE FROM loan_app_addresses WHERE address_id=?`;
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

Address.Update = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { id, ...formData } = data;
            const query =
                `UPDATE loan_app_addresses SET ` +
                Object.keys(formData)
                    .map((key) => `${key} = ?`)
                    .join(", ") +
                ` WHERE ?`;
            const parameters = [...Object.values(formData), { address_id: id }];
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

module.exports = Address;