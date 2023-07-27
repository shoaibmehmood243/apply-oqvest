const db = require("../Utilities/dbConfig");

class Employment {
    loan_application_id;
    employment_status;
    employer_name;
    street_address;
    city;
    state;
    zip_code;
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
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.employment_status = obj.employment_status,
        this.employer_name = obj.employer_name,
        this.street_address = obj.street_address,
        this.city = obj.city,
        this.state = obj.state,
        this.zip_code = obj.zip_code,
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
        this.created_at = obj.created_at || new Date().toISOString()
    }
}

Employment.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO employments SET ?`;
            db.query(query, data, (err, sqlresult) => {
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