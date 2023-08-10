const db = require("../Utilities/dbConfig");

class Properties {
    loan_application_id;
    street_address;
    realtor_info;
    property_aside;
    subject_property_type;
    is_authorized;
    credit_report_access;
    created_at;
    updated_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.street_address = obj.street_address,
        this.realtor_info = obj.realtor_info,
        this.property_aside = obj.property_aside,
        this.subject_property_type = obj.subject_property_type,
        this.is_authorized = obj.is_authorized,
        this.credit_report_access = obj.credit_report_access,
        this.created_at = obj.created_at || new Date().toISOString().replace("T", " ").split(".")[0],
        this.updated_at = obj.updated_at || null
    }
}

Properties.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO loan_app_subject_properties SET ?`;
            db.query(query, data, (err, sqlresult) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({id: sqlresult.insertId})
                }
            })
        } catch (error) {
            reject(error);
        }
    })
}

Properties.Update = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { id, ...formData } = data;
            const query =
                `UPDATE loan_app_subject_properties SET ` +
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

module.exports = Properties;