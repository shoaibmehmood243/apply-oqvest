const db = require("../Utilities/dbConfig");

class PersonalInfo {
    loan_application_id;
    date_of_birth;
    security_number;
    citizen_status;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.date_of_birth = obj.date_of_birth,
        this.security_number = obj.security_number,
        this.citizen_status = obj.citizen_status,
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
                    resolve({id: sqlresult.insertId})
                }
            })
        } catch (error) {
            reject(error);
        }
    })
}

PersonalInfo.Update = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { id, ...formData } = data;
            const query =
                `UPDATE personal_info SET ` +
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

module.exports = PersonalInfo;