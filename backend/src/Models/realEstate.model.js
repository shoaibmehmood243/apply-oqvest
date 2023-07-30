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
        this.created_at = obj.created_at || new Date().toISOString()
    }
}

RealEstate.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO real_estate SET ?`;
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

module.exports = RealEstate;