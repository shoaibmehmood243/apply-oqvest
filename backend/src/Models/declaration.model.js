const db = require("../Utilities/dbConfig");

class Declarations {
    loan_application_id;
    primary_residence;
    ownership_last_three_years;
    purchase_transaction;
    non_disclosed_money;
    non_disclosed_loan_on_property;
    non_disclosed_credit;
    property_subject_to_lien;
    non_disclosed_debt_loan;
    outstanding_judgements;
    federal_debt;
    personal_financial_liability;
    lieu_of_foreclosure;
    pre_foreclosure_sale;
    property_foreclosed;
    bankruptancy_declarancy;
    ethnicity;
    gender;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
        this.primary_residence = obj.primary_residence,
        this.ownership_last_three_years = obj.ownership_last_three_years,
        this.purchase_transaction = obj.purchase_transaction,
        this.non_disclosed_money = obj.non_disclosed_money,
        this.non_disclosed_loan_on_property = obj.non_disclosed_loan_on_property,
        this.non_disclosed_credit = obj.non_disclosed_credit,
        this.property_subject_to_lien = obj.property_subject_to_lien,
        this.non_disclosed_debt_loan = obj.non_disclosed_debt_loan,
        this.outstanding_judgements = obj.outstanding_judgements,
        this.federal_debt = obj.federal_debt,
        this.personal_financial_liability = obj.personal_financial_liability,
        this.lieu_of_foreclosure = obj.lieu_of_foreclosure,
        this.pre_foreclosure_sale = obj.pre_foreclosure_sale,
        this.property_foreclosed = obj.property_foreclosed,
        this.bankruptancy_declarancy = obj.bankruptancy_declarancy,
        this.ethnicity = obj.ethnicity,
        this.gender = obj.gender,
        this.created_at = obj.created_at || new Date().toISOString().replace("T", " ").split(".")[0]
    }
}

Declarations.Add = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO loan_app_declarations SET ?`;
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

module.exports = Declarations;