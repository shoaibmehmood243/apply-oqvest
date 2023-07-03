const db = require("../Utilities/dbConfig");

class LoanApplications {
    loan_category_id;
    client_id;
    zip_code;
    purchase_price;
    down_payment;
    payment_source;
    is_veteran;
    other_mortgage_loans;
    martial_status_id;
    borrowers_id;
    personal_info_id;
    loan_verification_id;
    employment_id;
    property_id;
    bank_id;
    status;
    is_active;
    created_at;
    updated_at;

    constructor(obj) {
        this.loan_category_id = obj.loan_category_id,
        this.client_id = obj.client_id,
        this.zip_code = obj.zip_code,
        this.purchase_price = obj.purchase_price,
        this.down_payment = obj.down_payment,
        this.payment_source = obj.payment_source,
        this.is_veteran = obj.is_veteran,
        this.other_mortgage_loans = obj.other_mortgage_loans,
        this.martial_status_id = obj.martial_status_id,
        this.borrowers_id = obj.borrowers_id,
        this.personal_info_id = obj.personal_info_id,
        this.loan_verification_id = obj.loan_verification_id,
        this.employment_id = obj.employment_id,
        this.property_id = obj.property_id,
        this.bank_id = obj.bank_id,
        this.status = obj.status || 'pending',
        this.is_active = obj.is_active || 1,
        this.created_at = obj.created_at || new Date().toISOString(),
        this.updated_at = obj.updated_at
    }
}

LoanApplications.AddPurchaseLoan = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO loan_applications SET ?`;
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
module.exports = LoanApplications;