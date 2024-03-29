const db = require("../Utilities/dbConfig");
const bcrypt = require('bcryptjs');
const Clients = require("./clients.model");

class Borrowers {
    loan_application_id;
    borrower_first_name;
    borrower_middle_name;
    borrower_last_name;
    borrower_phone;
    borrower_email;
    borrower_martial_status;
    relationship_to_primary_borrower;
    is_authorized;
    created_at;

    constructor(obj) {
        this.loan_application_id = obj.loan_application_id,
            this.borrower_first_name = obj.borrower_first_name,
            this.borrower_middle_name = obj.borrower_middle_name,
            this.borrower_last_name = obj.borrower_last_name,
            this.borrower_phone = obj.borrower_phone,
            this.borrower_email = obj.borrower_email,
            this.borrower_martial_status = obj.borrower_martial_status,
            this.relationship_to_primary_borrower = obj.relationship_to_primary_borrower,
            this.is_authorized = obj.is_authorized,
            this.created_at = obj.created_at || new Date().toISOString().replace("T", " ").split(".")[0]
    }
}

Borrowers.Delete = async (id, loanId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = `DELETE FROM loan_app_co_borrowers WHERE id=?`;
            db.query(query, id, (err, sqlresult) => {
                if (err) {
                    reject(err);
                } else {
                    query = `DELETE FROM loan_applications WHERE id=?`;
                    db.query(query, loanId, (err, sqlresult2)=> {
                        if(err) {
                            reject(err);
                        } else {
                            resolve(sqlresult)
                        }
                    })
                }
            })
        } catch (error) {
            reject(error);
        }
    })
}

Borrowers.GetBorrowers = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `SELECT 
                loan_app_co_borrowers.id,
                loan_app_co_borrowers.loan_application_id,
                loan_app_co_borrowers.borrower_first_name,
                loan_app_co_borrowers.borrower_last_name,
                loan_app_co_borrowers.borrower_phone,
                loan_app_co_borrowers.borrower_email,
                loan_app_co_borrowers.borrower_martial_status,
                loan_app_co_borrowers.relationship_to_primary_borrower,
                loan_app_co_borrowers.is_authorized
                FROM 
                    loan_app_co_borrowers
                JOIN 
                    loan_applications 
                ON 
                    loan_app_co_borrowers.loan_application_id = loan_applications.id
                WHERE 
                    loan_applications.loan_number = ?;
            `;
            db.query(query, id, (err, sqlresult) => {
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

Borrowers.Update = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { id, ...formData } = data;
            const query =
                `UPDATE loan_app_co_borrowers SET ` +
                Object.keys(formData)
                    .map((key) => `${key} = ?`)
                    .join(", ") +
                ` WHERE ?`;
            const parameters = [...Object.values(formData), { id }];
            db.query(query, parameters, (err, sqlresult) => {
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


Borrowers.Add = async (data, strongPassword, loanData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.getConnection((err, conn) => {
                if (err) {
                    reject(err);
                } else {
                    conn.beginTransaction(async (err) => {
                        if (err) {
                            conn.rollback(() => {
                                conn.release();
                                reject(err);
                            })
                        } else {
                            let clientObj;
                            const emailRes = await Clients.getByEmail(data.borrower_email);
                            if (emailRes.length > 0) {
                                const loanApplicationObj = {
                                    loan_number: loanData.loan_number,
                                    loan_type: loanData.loan_type,
                                    client_id: emailRes[0].user_id,
                                    purchase_price: loanData.purchase_price,
                                    down_payment_percentage: loanData.down_payment_percentage,
                                    payment_source: loanData.payment_source,
                                    is_veteran: loanData.is_veteran,
                                    other_mortgage_loans: loanData.other_mortgage_loans,
                                    application_status: 'pending',
                                    is_active: 0,
                                    created_at: new Date().toISOString().replace("T", " ").split(".")[0],
                                }
                                const query = `INSERT INTO loan_applications SET ?`;
                                conn.query(query, loanApplicationObj, (err, loanApplicationResult) => {
                                    if (err) {
                                        conn.rollback(() => {
                                            conn.release();
                                            reject(err);
                                        })
                                    } else {
                                        const coBorrowerData = { ...data, loan_application_id: loanApplicationResult.insertId }
                                        const query = `INSERT INTO loan_app_co_borrowers SET ?`;
                                        conn.query(query, coBorrowerData, (err, coBorrowerRes) => {
                                            if (err) {
                                                conn.rollback(() => {
                                                    conn.release();
                                                    reject(err);
                                                })
                                            } else {
                                                conn.commit((err) => {
                                                    if (err) {
                                                        conn.rollback(() => {
                                                            conn.release();
                                                            reject(err);
                                                        })
                                                    } else {
                                                        conn.release();
                                                        resolve({
                                                            status: true,
                                                            id: coBorrowerRes.insertId
                                                        });
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            } else {
                                const salt = await bcrypt.genSalt(10);
                                const hashedPassword = await bcrypt.hash(strongPassword, salt);
                                clientObj = {
                                    first_name: data.borrower_first_name, middle_name: data.borrower_middle_name,
                                    last_name: data.borrower_last_name, email: data.borrower_email,
                                    phone_number: data.borrower_phone, password: hashedPassword
                                }
                                const userObj = new Clients(clientObj);
                                const query = `INSERT INTO clients SET ?`;
                                conn.query(query, userObj, async (err, clientResult) => {
                                    if (err) {
                                        conn.rollback(() => {
                                            conn.release();
                                            reject(err);
                                        })
                                    } else {
                                        const loanApplicationObj = {
                                            loan_number: loanData.loan_number,
                                            loan_type: loanData.loan_type,
                                            client_id: clientResult.insertId,
                                            purchase_price: loanData.purchase_price,
                                            down_payment_percentage: loanData.down_payment_percentage,
                                            payment_source: loanData.payment_source,
                                            is_veteran: loanData.is_veteran,
                                            other_mortgage_loans: loanData.other_mortgage_loans,
                                            application_status: 'pending',
                                            is_active: 0,
                                            created_at: new Date().toISOString().replace("T", " ").split(".")[0],
                                        }
                                        const query = `INSERT INTO loan_applications SET ?`;
                                        conn.query(query, loanApplicationObj, (err, loanApplicationResult) => {
                                            if (err) {
                                                conn.rollback(() => {
                                                    conn.release();
                                                    reject(err);
                                                })
                                            } else {
                                                const coBorrowerData = { ...data, loan_application_id: loanApplicationResult.insertId }
                                                const query = `INSERT INTO loan_app_co_borrowers SET ?`;
                                                conn.query(query, coBorrowerData, (err, coBorrowerRes) => {
                                                    if (err) {
                                                        conn.rollback(() => {
                                                            conn.release();
                                                            reject(err);
                                                        })
                                                    } else {
                                                        conn.commit((err) => {
                                                            if (err) {
                                                                conn.rollback(() => {
                                                                    conn.release();
                                                                    reject(err);
                                                                })
                                                            } else {
                                                                conn.release();
                                                                resolve({
                                                                    status: true,
                                                                    id: coBorrowerRes.insertId
                                                                });
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        }
                    })
                }
            })
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = Borrowers;