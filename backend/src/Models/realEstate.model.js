const db = require("../Utilities/dbConfig");

class RealEstate {
    loan_application_id;
    street_address;
    property_status;
    owned_by;
    intended_occupancy;
    current_occupancy;
    property_type;
    market_value;
    monthly_rental_income;
    monthly_expense;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.street_address = obj.street_address,
        this.property_status = obj.property_status,
        this.owned_by = obj.owned_by,
        this.intended_occupancy = obj.intended_occupancy,
        this.current_occupancy = obj.current_occupancy,
        this.property_type = obj.property_type,
        this.market_value = obj.market_value,
        this.monthly_rental_income = obj.monthly_rental_income,
        this.monthly_expense = obj.monthly_expense,
        this.created_at = obj.created_at || new Date().toISOString().replace("T", " ").split(".")[0]
    }
}

RealEstate.GetRealEstate = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `SELECT * FROM loan_app_real_estate WHERE loan_application_id=?`;
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

RealEstate.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO loan_app_real_estate SET ?`;
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

RealEstate.Delete = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `DELETE FROM loan_app_real_estate WHERE real_estate_id=?`;
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

RealEstate.Update = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { id, ...formData } = data;
            const query =
                `UPDATE loan_app_real_estate SET ` +
                Object.keys(formData)
                    .map((key) => `${key} = ?`)
                    .join(", ") +
                ` WHERE ?`;
            const parameters = [...Object.values(formData), { real_estate_id: id }];
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

module.exports = RealEstate;