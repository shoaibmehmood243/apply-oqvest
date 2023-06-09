const Clients = require('../Models/clients.model');
const { comparePassword } = require('../Utilities/bcrypt');
const { signAccessToken, signRefreshToken, forgetPassAccessToken } = require('../Utilities/jwtUtil');
const path = require("path");
const ejs = require("ejs");
const sendEmail = require('../Utilities/sendEmail');
const SetPasswordTemplate = path.join(__dirname, ".", "..", "Templates/SetPassword.ejs");
const JWT = require('jsonwebtoken');

const authController = {
    register: async (req, res, next) => {
        try {
            const emailRes = await Clients.getByEmail(req.body.email);
            if (emailRes.length > 0) {
                res.status(200).send({ status: false, message: 'User with this email is already registered. Try using other email.' });
            } else {
                const userObj = new Clients(req.body);
                const response = await Clients.Register(userObj);
                if (response) {
                    res.status(200).send({ status: true, data: response, message: 'User registered successfully.' });
                }
            }
        } catch (error) {
            res.status(400).send({ status: false, message: error });
        }
    },
    login: async (req, res, next) => {
        try {
            const emailRes = await Clients.getByEmail(req.body.email);
            if (emailRes.length === 0) {
                res.status(404).send({ status: false, message: 'User with this email is not registered. Please register with us.' })
            } else {
                await comparePassword(req.body.password, emailRes[0].password, async (err, passwordRes) => {
                    if (err) {
                        res.status(404).send({ status: false, message: 'Invalid email/password. Please try again.' })
                    } else {
                        const accessToken = await signAccessToken(emailRes[0].user_id);
                        const refreshToken = await signRefreshToken(emailRes[0].user_id);
                        res.cookie('accessToken', `bearer ${accessToken}`, {
                            httpOnly: false,
                            maxAge: 24 * 60 * 60 * 1000,
                            path: '/'
                        });
                        const { password, ...user } = emailRes[0];
                        res.status(200).send({ data: user, refreshToken, status: true, message: 'User logged in successfully.' })
                    }
                });
            }
        } catch (error) {
            next(error);
        }
    },
    forgetPassword: async (req, res, next) => {
        try {
            Clients.getByEmail(req.body.email).then(async(data)=> {
                if(data.length > 0) {
                    const username = data[0].first_name;
                    const email = req.body.email;
                    const token = await forgetPassAccessToken(email);
                    const link = `${process.env.APP_URL}/set-password`;
                    await ejs.renderFile(SetPasswordTemplate, { username: username, link: link, token: token }, async(err, emailData)=> {
                        if(err){
                            res.status(400).send({status: false,message: err});
                        } else {
                            await sendEmail(email, "Please Verify Your Account", emailData, (err, success)=> {
                                if(err){
                                    res.status(400).send({status: false,message: err});
                                } else {
                                    res.status(200).send({ status: true,message: "Email has been sent successfully. Please reset your password."});
                                }
                            })
                        }
                    })
                } else {
                    res.status(400).send({status: false,message: 'This email is not registered with us. Try registering with this email.'});
                }
            }).catch((err)=> {
                res.status(400).send({status: false,message: err});
            })
        } catch (err) {
            res.status(400).send({status: false, message: err});
        }
    },
    setPassword: async (req, res, next) => {
        try {
            const token = req.params.token;
            const { aud } = await JWT.verify(token, process.env.ACCESS_TOKEN_SECRET);

            if (req.body.password !== req.body.cpassword) {
                res.status(422).json({ message: "Password doesn't match." });
            } else {
                const obj = {
                    password: req.body.password,
                    email: aud
                }
                Clients.setPassword(obj, (err, data) => {
                    if (err) {
                        res.status(400).send({status: false, message: err});
                    } else {
                        res.status(200).send({ status: true, message: "Password reset successfully." });
                    }
                });
            }

        } catch (error) {
            res.status(404).send({status: false, message: 'Your link has expired.'});
        }
    }
}



module.exports = authController;