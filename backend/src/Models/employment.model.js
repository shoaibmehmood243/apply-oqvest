const db = require("../Utilities/dbConfig");

class Employment {
    loan_application_id;
    employment_status;
    employer_name;
    street_address;
    phone_number;
    industry;
    position;
    start_month;
    start_year;
    base;
    overtime;
    bonus;
    comission;
    other;
    total;
    automatically_verify_income;
    employed_transaction;
    ownership_share;
    monthly_income;
    other_description;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.employment_status = obj.employment_status,
        this.employer_name = obj.employer_name,
        this.street_address = obj.street_address,
        this.phone_number = obj.phone_number,
        this.industry = obj.industry,
        this.position = obj.position,
        this.start_month = obj.start_month,
        this.start_year = obj.start_year,
        this.base = obj.base,
        this.overtime = obj.overtime,
        this.bonus = obj.bonus,
        this.comission = obj.comission,
        this.other = obj.other,
        this.total = obj.total,
        this.automatically_verify_income = obj.automatically_verify_income || 0,
        this.employed_transaction = obj.employed_transaction || 0,
        this.ownership_share = obj.ownership_share,
        this.monthly_income = obj.monthly_income,
        this.other_description = obj.other_description,
        this.created_at = obj.created_at || new Date().toISOString()
    }
}

Employment.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO loan_app_employments SET ?`;
            db.query(query, data, (err, sqlresult) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        id: sqlresult.insertId
                    });
                }
            })
        } catch (error) {
            reject(error);
        }
    })
}

Employment.Delete = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `DELETE FROM loan_app_employments WHERE id=?`;
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

Employment.Update = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { id, ...formData } = data;
            const query =
                `UPDATE loan_app_employments SET ` +
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

module.exports = Employment;