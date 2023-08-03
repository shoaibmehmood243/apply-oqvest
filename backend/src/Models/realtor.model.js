const db = require("../Utilities/dbConfig");

class RealtorInfo {
    loan_application_id;
    realtor_first_name;
    realtor_last_name;
    realtor_company_name;
    realtor_phone_number;
    realtor_email;
    loan_share_authorization;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.realtor_first_name = obj.realtor_first_name,
        this.realtor_last_name = obj.realtor_last_name,
        this.realtor_company_name = obj.realtor_company_name,
        this.realtor_phone_number = obj.realtor_phone_number,
        this.realtor_email = obj.realtor_email,
        this.loan_share_authorization = obj.loan_share_authorization,
        this.created_at = obj.created_at || new Date().toISOString()
    }
}

RealtorInfo.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO loan_app_realtor_info SET ?`;
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

module.exports = RealtorInfo;