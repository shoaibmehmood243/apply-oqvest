const db = require("../Utilities/dbConfig");

function generateUniqueLoanNumber() {
    const date = new Date();
    const datePart = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
    const timePart = `${String(date.getHours()).padStart(2, '0')}${String(date.getMinutes()).padStart(2, '0')}${String(date.getSeconds()).padStart(2, '0')}`;
    const randomSuffix = Math.floor(Math.random() * 1000).toString().padStart(3, '0');

    const uniqueLoanNumber = `${datePart}${timePart}${randomSuffix}`;

    const hexLoanNumber = BigInt(uniqueLoanNumber).toString(16);
    return hexLoanNumber.toUpperCase();
}

class LoanApplications {
    loan_number;
    loan_type;
    client_id;
    purchase_price;
    down_payment;
    payment_source;
    is_veteran;
    other_mortgage_loans;
    status;
    is_active;
    created_at;
    updated_at;

    constructor(obj) {
        this.loan_number = generateUniqueLoanNumber();
        this.loan_type = obj.loan_type,
            this.client_id = obj.client_id,
            this.purchase_price = obj.purchase_price,
            this.down_payment = obj.down_payment,
            this.payment_source = obj.payment_source,
            this.is_veteran = obj.is_veteran,
            this.other_mortgage_loans = obj.other_mortgage_loans,
            this.status = obj.status || 'pending',
            this.is_active = obj.is_active || 0,
            this.created_at = obj.created_at || new Date().toISOString(),
            this.updated_at = obj.updated_at
    }
}

LoanApplications.getLoanApplication = async (client_id) => {
    return new Promise((resolve, reject) => {
        try {
            db.getConnection((err, conn) => {
                if (err) {
                    reject(err);
                } else {
                    conn.beginTransaction((err) => {
                        if (err) {
                            conn.rollback(() => {
                                conn.release();
                                reject(err);
                            })
                        } else {
                            let query = `SELECT * FROM loan_applications WHERE client_id = ?`;
                            conn.query(query, client_id, async (err, loanApplicationResult) => {
                                if (err) {
                                    conn.rollback(() => {
                                        conn.release();
                                        reject(err);
                                    })
                                } else {
                                    if (loanApplicationResult.length > 0 && loanApplicationResult[0].is_active === 1) {
                                        const loanApplicationId = loanApplicationResult[loanApplicationResult.length - 1].id;
                                        query = `SELECT * FROM personal_info WHERE loan_application_id = ?`;
                                        conn.query(query, loanApplicationId, async (err, personalInfo) => {
                                            if (err) {
                                                conn.rollback(() => {
                                                    conn.release();
                                                    reject(err);
                                                })
                                            } else {
                                                query = `SELECT * FROM subject_properties WHERE loan_application_id = ?`;
                                                conn.query(query, loanApplicationId, async (err, properties) => {
                                                    if (err) {
                                                        conn.rollback(() => {
                                                            conn.release();
                                                            reject(err);
                                                        })
                                                    } else {
                                                        query = `SELECT * FROM spouse WHERE loan_application_id = ?`;
                                                        conn.query(query, loanApplicationId, async (err, martialStatus) => {
                                                            if (err) {
                                                                conn.rollback(() => {
                                                                    conn.release();
                                                                    reject(err);
                                                                })
                                                            } else {
                                                                query = `SELECT * FROM co_borrowers WHERE loan_application_id = ?`;
                                                                conn.query(query, loanApplicationId, async (err, borrowers) => {
                                                                    if (err) {
                                                                        conn.rollback(() => {
                                                                            conn.release();
                                                                            reject(err);
                                                                        })
                                                                    } else {
                                                                        query = `SELECT * FROM real_estate WHERE loan_application_id = ?`;
                                                                        conn.query(query, loanApplicationId, async (err, realEstate) => {
                                                                            if (err) {
                                                                                conn.rollback(() => {
                                                                                    conn.release();
                                                                                    reject(err);
                                                                                })
                                                                            } else {
                                                                                query = `SELECT * FROM employments WHERE loan_application_id = ?`;
                                                                                conn.query(query, loanApplicationId, async (err, employments) => {
                                                                                    if (err) {
                                                                                        conn.rollback(() => {
                                                                                            conn.release();
                                                                                            reject(err);
                                                                                        })
                                                                                    } else {
                                                                                        query = `SELECT * FROM monthly_income WHERE loan_application_id = ?`;
                                                                                        conn.query(query, loanApplicationId, async (err, monthlyIncomes) => {
                                                                                            if (err) {
                                                                                                conn.rollback(() => {
                                                                                                    conn.release();
                                                                                                    reject(err);
                                                                                                })
                                                                                            } else {
                                                                                                query = `SELECT * FROM assets WHERE loan_application_id = ?`;
                                                                                                conn.query(query, loanApplicationId, async (err, assets) => {
                                                                                                    if (err) {
                                                                                                        conn.rollback(() => {
                                                                                                            conn.release();
                                                                                                            reject(err);
                                                                                                        })
                                                                                                    } else {
                                                                                                        query = `SELECT * FROM liabilities WHERE loan_application_id = ?`;
                                                                                                        conn.query(query, loanApplicationId, async (err, liabilities) => {
                                                                                                            if (err) {
                                                                                                                conn.rollback(() => {
                                                                                                                    conn.release();
                                                                                                                    reject(err);
                                                                                                                })
                                                                                                            } else {
                                                                                                                query = `SELECT * FROM gifts_grants WHERE loan_application_id = ?`;
                                                                                                                conn.query(query, loanApplicationId, async (err, giftsGrants) => {
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
                                                                                                                                    loanApplications: loanApplicationResult[loanApplicationResult.length - 1],
                                                                                                                                    personalInfo,
                                                                                                                                    properties,
                                                                                                                                    martialStatus,
                                                                                                                                    borrowers,
                                                                                                                                    realEstate,
                                                                                                                                    employments,
                                                                                                                                    monthlyIncomes,
                                                                                                                                    assets,
                                                                                                                                    liabilities,
                                                                                                                                    giftsGrants
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
                                                                                        })
                                                                                    }
                                                                                })
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
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
                                                    loanApplicationId: loanApplicationResult[0]?.id
                                                });
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            })
        } catch (error) {
            reject(error);
        }
    })
}

LoanApplications.getLoanData = async (clientid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `SELECT
                loan_applications.id,
                loan_applications.loan_number,
                loan_applications.loan_type,
                DATE_FORMAT(loan_applications.created_at, '%d/%m/%Y') as created_at,
                loan_applications.status,
                subject_properties.street_address
                FROM
                loan_applications
                LEFT JOIN
                subject_properties ON subject_properties.loan_application_id = loan_applications.id
                WHERE
                loan_applications.client_id = ${clientid};
            `;
            db.query(query, (err, sqlresult) => {
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

LoanApplications.addLoanApplication = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO loan_applications SET ?`;
            db.query(query, data, (err, sqlresult) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: sqlresult.insertId, loan_number: data.loan_number });
                }
            })
        } catch (error) {
            reject(error);
        }
    })
}

LoanApplications.UpdateLoanApplication = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { id, ...formData } = data;
            const query =
                `UPDATE loan_applications SET ` +
                Object.keys(formData)
                    .map((key) => `${key} = ?`)
                    .join(", ") +
                `,updated_at='${new Date().toISOString().replace("T", " ").split(".")[0]
                }' WHERE ?`;
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

module.exports = LoanApplications;