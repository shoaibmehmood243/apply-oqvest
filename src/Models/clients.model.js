const db = require("../Utilities/dbConfig");
const bcrypt = require('bcrypt');

class Clients {
    first_name;
    middle_name;
    last_name;
    email;
    password;
    phone_number;
    company_id;
    is_active;
    created_at;
    updated_at;

    constructor(obj) {
        this.first_name = obj.first_name,
        this.middle_name = obj.middle_name,
        this.last_name = obj.last_name,
        this.email = obj.email,
        this.password = obj.password,
        this.phone_number = obj.phone_number,
        this.company_id = obj.company_id || 1,
        this.is_active = obj.is_active || 1,
        this.created_at = obj.created_at || new Date().toISOString(),
        this.updated_at = obj.updated_at || null
    }
}

Clients.Register = async (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(data.password, salt);
            data.password = hashedPassword;
            const query = `INSERT INTO clients SET ?`;
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

Clients.getByEmail = (email) => {
    return new Promise((resolve, reject) => {
        try {
            const query = `SELECT clients.id as user_id, clients.first_name, clients.middle_name, clients.password, 
            clients.last_name, clients.email, clients.phone_number,
            clients.company_id FROM clients WHERE email = '${email}'`;
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

Clients.setPassword = async (userData, result) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);
      const query = `UPDATE clients SET password = ? WHERE email = '${userData.email}'`;
      db.query(query, hashedPassword, (err, sqlresult) => {
        if (err) {
          result(err, undefined);
        } else {
          result(undefined, sqlresult);
        }
      });
    } catch (err) {
      result(err, undefined);
    }
  };

module.exports = Clients;