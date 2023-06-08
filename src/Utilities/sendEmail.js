const nodemailer = require("nodemailer");

const sendEmail = async(to, subject, html, cb)=> {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shoaibmehmood065@gmail.com',
            pass: 'fdktthzmaghlanwi'
        }
    })
    let mailOptions = {
        from: 'shoaibmehmood065@gmail.com',
        to: to,
        subject: subject,
        html: html
    }
    transporter.sendMail(mailOptions, (err, data)=> {
        if(err) {
            cb(err, undefined);
        } else {
            cb(undefined, data);
        }
    })
}

module.exports = sendEmail;