const db = require("../Utilities/dbConfig");
const bcrypt = require('bcryptjs');
const Clients = require("./clients.model");

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

Spouse.AddSpouse = async (data, strongPassword, loanData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.getConnection((err, conn)=> {
                if(err) {
                    reject(err);
                } else {
                    conn.beginTransaction((err)=> {
                        if(err) {
                            conn.rollback(() => {
                                conn.release();
                                reject(err);
                            })
                        } else {
                            const query = `INSERT INTO spouse SET ?`;
                            conn.query(query, data, async(err, sqlresult) => {
                                if (err) {
                                    conn.rollback(() => {
                                        conn.release();
                                        reject(err);
                                    })
                                } else {
                                    const salt = await bcrypt.genSalt(10);
                                    const hashedPassword = await bcrypt.hash(strongPassword, salt);
                                    const clientObj = {
                                        first_name: data.spouse_first_name,
                                        last_name: data.spouse_last_name, email: data.spouse_email, 
                                        phone_number: data.spouse_phone, password: hashedPassword,
                                        martial_status: data.status
                                    }
                                    const userObj = new Clients(clientObj);
                                    const query = `INSERT INTO clients SET ?`;
                                    conn.query(query, userObj, async(err, clientResult)=> {
                                        if(err) {
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
                                            conn.query(query, loanApplicationObj, (err, loanApplicationResult)=> {
                                                if(err) {
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
                                                                sqlresult, clientResult, loanApplicationResult
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
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = Spouse;