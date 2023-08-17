const db = require("../Utilities/dbConfig");
const Clients = require("./clients.model");
const bcrypt = require('bcryptjs');

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
    down_payment_percentage;
    payment_source;
    is_veteran;
    other_mortgage_loans;
    application_status;
    loan_application_stage;
    is_active;
    created_at;
    updated_at;

    constructor(obj) {
        this.loan_number = generateUniqueLoanNumber();
        this.loan_type = obj.loan_type,
            this.client_id = obj.client_id,
            this.purchase_price = obj.purchase_price,
            this.down_payment_percentage = obj.down_payment_percentage,
            this.payment_source = obj.payment_source,
            this.is_veteran = obj.is_veteran,
            this.other_mortgage_loans = obj.other_mortgage_loans,
            this.application_status = obj.application_status || 'pending',
            this.is_active = obj.is_active || 0,
            this.loan_application_stage = obj.loan_application_stage || 1,
            this.created_at = obj.created_at || new Date().toISOString().replace("T", " ").split(".")[0],
            this.updated_at = obj.updated_at
    }
}

LoanApplications.getLoanApplication = async (id) => {
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
                            let query = `SELECT * FROM loan_applications WHERE id = ?`;
                            conn.query(query, id, async (err, loanApplicationResult) => {
                                if (err) {
                                    conn.rollback(() => {
                                        conn.release();
                                        reject(err);
                                    })
                                } else {
                                    if (loanApplicationResult.length > 0) {
                                        const loanApplicationId = loanApplicationResult[loanApplicationResult.length - 1].id;
                                        query = `SELECT * FROM loan_app_personal_info WHERE loan_application_id = ?`;
                                        conn.query(query, loanApplicationId, async (err, personalInfo) => {
                                            if (err) {
                                                conn.rollback(() => {
                                                    conn.release();
                                                    reject(err);
                                                })
                                            } else {
                                                query = `SELECT * FROM loan_app_subject_properties WHERE loan_application_id = ?`;
                                                conn.query(query, loanApplicationId, async (err, properties) => {
                                                    if (err) {
                                                        conn.rollback(() => {
                                                            conn.release();
                                                            reject(err);
                                                        })
                                                    } else {
                                                        query = `SELECT * FROM loan_app_addresses WHERE loan_application_id = ?`;
                                                        conn.query(query, loanApplicationId, async (err, addresses) => {
                                                            if (err) {
                                                                conn.rollback(() => {
                                                                    conn.release();
                                                                    reject(err);
                                                                })
                                                            } else {
                                                                query = `SELECT * FROM loan_app_co_borrowers WHERE loan_application_id = ?`;
                                                                conn.query(query, loanApplicationId, async (err, borrowers) => {
                                                                    if (err) {
                                                                        conn.rollback(() => {
                                                                            conn.release();
                                                                            reject(err);
                                                                        })
                                                                    } else {
                                                                        query = `SELECT * FROM loan_app_real_estate WHERE loan_application_id = ?`;
                                                                        conn.query(query, loanApplicationId, async (err, realEstate) => {
                                                                            if (err) {
                                                                                conn.rollback(() => {
                                                                                    conn.release();
                                                                                    reject(err);
                                                                                })
                                                                            } else {
                                                                                query = `SELECT * FROM loan_app_employments WHERE loan_application_id = ?`;
                                                                                conn.query(query, loanApplicationId, async (err, employments) => {
                                                                                    if (err) {
                                                                                        conn.rollback(() => {
                                                                                            conn.release();
                                                                                            reject(err);
                                                                                        })
                                                                                    } else {
                                                                                        query = `SELECT * FROM loan_app_other_income WHERE loan_application_id = ?`;
                                                                                        conn.query(query, loanApplicationId, async (err, monthlyIncomes) => {
                                                                                            if (err) {
                                                                                                conn.rollback(() => {
                                                                                                    conn.release();
                                                                                                    reject(err);
                                                                                                })
                                                                                            } else {
                                                                                                query = `SELECT * FROM loan_app_assets WHERE loan_application_id = ?`;
                                                                                                conn.query(query, loanApplicationId, async (err, assets) => {
                                                                                                    if (err) {
                                                                                                        conn.rollback(() => {
                                                                                                            conn.release();
                                                                                                            reject(err);
                                                                                                        })
                                                                                                    } else {
                                                                                                        query = `SELECT * FROM loan_app_liabilities WHERE loan_application_id = ?`;
                                                                                                        conn.query(query, loanApplicationId, async (err, liabilities) => {
                                                                                                            if (err) {
                                                                                                                conn.rollback(() => {
                                                                                                                    conn.release();
                                                                                                                    reject(err);
                                                                                                                })
                                                                                                            } else {
                                                                                                                query = `SELECT * FROM loan_app_gifts_grants WHERE loan_application_id = ?`;
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
                                                                                                                                    addresses,
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
                loan_applications.application_status as status,
                loan_app_subject_properties.street_address
                FROM
                loan_applications
                LEFT JOIN
                loan_app_subject_properties ON loan_app_subject_properties.loan_application_id = loan_applications.id
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

LoanApplications.UpdateSpouse = async (data, strongPassword, loanData) => {
    return new Promise(async (resolve, reject) => {
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
                            const { id, ...formData } = data;
                            const query =
                                `UPDATE loan_applications SET ` +
                                Object.keys(formData)
                                    .map((key) => `${key} = ?`)
                                    .join(", ") +
                                `,updated_at='${new Date().toISOString().replace("T", " ").split(".")[0]
                                }' WHERE ?`;
                            const parameters = [...Object.values(formData), { id }];
                            conn.query(query, parameters, async (err, sqlresult) => {
                                if (err) {
                                    conn.rollback(() => {
                                        conn.release();
                                        reject(err);
                                    })
                                } else {
                                    const emailRes = await Clients.getByEmail(data.spouse_email);
                                    if(emailRes.length === 0) {
                                        const salt = await bcrypt.genSalt(10);
                                        const hashedPassword = await bcrypt.hash(strongPassword, salt);
                                        const clientObj = {
                                            first_name: data.spouse_first_name,
                                            last_name: data.spouse_last_name, email: data.spouse_email,
                                            phone_number: data.spouse_phone, password: hashedPassword
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
                                                    status: 'pending',
                                                    is_active: 0,
                                                    created_at: new Date().toISOString(),
                                                }
                                                const query = `INSERT INTO loan_applications SET ?`;
                                                conn.query(query, loanApplicationObj, (err, loanApplicationResult) => {
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
                                                                    status: true
                                                                });
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    } else {
                                        const loanApplicationObj = {
                                            loan_number: loanData.loan_number,
                                            loan_type: loanData.loan_type,
                                            client_id: emailRes[0].user_id,
                                            application_status: 'pending',
                                            is_active: 0,
                                            created_at: new Date().toISOString(),
                                        }
                                        const query = `INSERT INTO loan_applications SET ?`;
                                        conn.query(query, loanApplicationObj, (err, loanApplicationResult) => {
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
                                                            status: false
                                                        });
                                                    }
                                                })
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

module.exports = LoanApplications;