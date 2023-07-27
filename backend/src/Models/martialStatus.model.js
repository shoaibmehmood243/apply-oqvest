const db = require("../Utilities/dbConfig");

class Spouse {
    loan_application_id;
    status;
    spouse_first_name;
    spouse_middle_name;
    spouse_last_name;
    spouse_phone;
    spouse_email;
    other_martial_status;
    relationship_status;
    relationship_type;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.status = obj.status,
        this.spouse_first_name = obj.spouse_first_name,
        this.spouse_middle_name = obj.spouse_middle_name,
        this.spouse_last_name = obj.spouse_last_name,
        this.spouse_phone = obj.spouse_phone,
        this.spouse_email = obj.spouse_email,
        this.other_martial_status = obj.other_martial_status,
        this.relationship_status = obj.relationship_status,
        this.relationship_type = obj.relationship_type,
        this.created_at = obj.created_at || new Date().toISOString()
    }
}

Spouse.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO spouse SET ?`;
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

module.exports = Spouse;