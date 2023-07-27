const db = require("../Utilities/dbConfig");

class Properties {
    loan_application_id;
    street_address;
    city;
    state;
    zip_code;
    property_occupancy;
    agent_info;
    created_at;
    updated_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.street_address = obj.street_address,
        this.city = obj.city,
        this.state = obj.state,
        this.zip_code = obj.zip_code,
        this.property_occupancy = obj.property_occupancy,
        this.agent_info = obj.agent_info,
        this.created_at = obj.created_at || new Date().toISOString(),
        this.updated_at = obj.updated_at || null
    }
}

Properties.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO properties SET ?`;
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

module.exports = Properties;