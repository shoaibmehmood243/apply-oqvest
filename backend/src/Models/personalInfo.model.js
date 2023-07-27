const db = require("../Utilities/dbConfig");

class PersonalInfo {
    loan_application_id;
    date_of_birth;
    security_number;
    citizen_status;
    street_address;
    city;
    state;
    zip_code;
    rent_owned;
    primary_address_duration_year;
    primary_address_duration_month;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.date_of_birth = obj.date_of_birth,
        this.security_number = obj.security_number,
        this.citizen_status = obj.citizen_status,
        this.street_address = obj.street_address,
        this.city = obj.city,
        this.state = obj.state,
        this.zip_code = obj.zip_code,
        this.rent_owned = obj.rent_owned,
        this.primary_address_duration_year = obj.primary_address_duration_year,
        this.primary_address_duration_month = obj.primary_address_duration_month,
        this.created_at = obj.created_at || new Date().toISOString()
    }
}

PersonalInfo.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO personal_info SET ?`;
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

module.exports = PersonalInfo;