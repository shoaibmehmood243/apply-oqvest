const db = require("../Utilities/dbConfig");
const bcrypt = require('bcryptjs');

class Dummy {
    full_name;
    email;
    organization;
    address;

    constructor(obj) {
        this.full_name = obj.full_name,
        this.email = obj.email,
        this.organization = obj.organization,
        this.address = obj.address
    }
}

Dummy.submit = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `INSERT INTO dummy SET ?`;
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
module.exports = Dummy;