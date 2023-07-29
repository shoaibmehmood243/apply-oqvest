const db = require("../Utilities/dbConfig");

class Properties {
    loan_application_id;
    street_address;
    property_occupancy;
    property_aside;
    subject_property_type;
    agent_info;
    created_at;
    updated_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.street_address = obj.street_address,
        this.property_occupancy = obj.property_occupancy,
        this.property_aside = obj.property_aside,
        this.subject_property_type = obj.subject_property_type,
        this.agent_info = obj.agent_info,
        this.created_at = obj.created_at || new Date().toISOString(),
        this.updated_at = obj.updated_at || null
    }
}

Properties.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO subject_properties SET ?`;
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