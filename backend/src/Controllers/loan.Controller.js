const LoanApplications = require('../Models/loan.model');
const PersonalInfo = require('../Models/personalInfo.model');
const Properties = require('../Models/properties.model');
const Borrowers = require('../Models/borrowers.model');
const RealEstate = require('../Models/realEstate.model');
const LoanVerification = require('../Models/loanVerification.model');
const Employment = require('../Models/employment.model');
const MonthlyIncome = require('../Models/monthlyIncome.model');
const Assets = require('../Models/assets.model');
const Liabilities = require('../Models/liabilities.model');
const GiftsGrants = require('../Models/giftsGrants.model');
const Spouse = require('../Models/martialStatus.model');
const Address = require('../Models/address.model');
const Declarations = require('../Models/declaration.model');
const path = require("path");
const ejs = require("ejs");
const sendEmail = require('../Utilities/sendEmail');
const { generateStrongPassword } = require('../Utilities/passwordGenerator');
const RealtorInfo = require('../Models/realtor.model');
const InviteEmailTemplate = path.join(__dirname, ".", "..", "Templates/InviteEmail.ejs");

const loanController = {
    getLoanApplication: async(req, res, next)=> {
        try {
            const data = await LoanApplications.getLoanApplication(req.params.client_id);
            if(Object.values(data).length > 0){
                res.status(200).send({status: true, data: data});
            } else {
                res.status(200).send({status: false, data: data});
            }
        } catch (error) {
            next(error);
        }
    },
    getLoanData: async(req, res, next)=> {
        try {
            const data = await LoanApplications.getLoanData(req.params.id);
            if(Object.values(data).length > 0){
                res.status(200).send({status: true, data: data});
            } else {
                res.status(200).send({status: false, data: data});
            }
        } catch (error) {
            next(error);
        }
    },
    addLoanApplication: async(req, res, next)=> {
        try {
            const dataObj = new LoanApplications(req.body.data);
            const data = await LoanApplications.addLoanApplication(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.', data});
            }
        } catch (error) {
            next(error);
        }
    },
    updateLoanApplication: async(req, res, next)=> {
        try {
            const data = await LoanApplications.UpdateLoanApplication(req.body);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application updated.'});
            }
        } catch (error) {
            next(error);
        }
    },
    addPersonalInfo: async(req, res, next)=> {
        try {
            const dataObj = new PersonalInfo(req.body.data);
            const data = await PersonalInfo.Add(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.', data});
            }
        } catch (error) {
            next(error);
        }
    },
    addProperty: async(req, res, next)=> {
        try {
            const dataObj = new Properties(req.body.data);
            const data = await Properties.Add(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.', data});
            }
        } catch (error) {
            next(error);
        }
    },
    updateMarialStatus: async(req, res, next)=> {
        try {
            const dataObj = req.body.data;
            let data;
            if(req.body.status === 'Unmarried') {
                data = await LoanApplications.UpdateLoanApplication(dataObj);
                if(data){
                    res.status(200).send({status: true, message: 'Loan Application submitted.'});
                }
            } else {
                const passwordLength = 10;
                const strongPassword = generateStrongPassword(passwordLength);
                data = await LoanApplications.UpdateSpouse(dataObj, strongPassword, req.body.loanData);
                if(data.status === true){
                    const emailObj = {
                        username: req.body.data.spouse_first_name, 
                        type: 'Spouse',
                        senderName: req.body.senderName,
                        email: req.body.data.spouse_email,
                        password: strongPassword
                    }
                    await ejs.renderFile(InviteEmailTemplate, emailObj, async(err, emailData)=> {
                        if(err) {
                            res.status(400).send({status: false,message: err});
                        } else {
                            await sendEmail(req.body.data.spouse_email, "Invitation Email - Oqvest", emailData, (err, success)=> {
                                if(err){
                                    res.status(400).send({status: false,message: err});
                                } else {
                                    res.status(200).send({status: true, message: 'Spouse has been added and Credentials to spouse email has been sent.'});
                                }
                            })
                        }
                    })
                } else {
                    res.status(200).send({status: true, message: 'Spouse has been added.'});
                }
            }
        } catch (error) {
            next(error);
        }
    },
    addBorrowers: async(req, res, next)=> {
        try {
            const passwordLength = 10;
            const strongPassword = generateStrongPassword(passwordLength);
            const dataObj = new Borrowers(req.body.data);
            const data = await Borrowers.Add(dataObj, strongPassword, req.body.loanData);
            if(data.status === false){
                const emailObj = {
                    username: req.body.data.borrower_first_name, 
                    type: 'Co-borrower',
                    senderName: req.body.senderName,
                    email: req.body.data.borrower_email,
                    password: strongPassword
                }
                await ejs.renderFile(InviteEmailTemplate, emailObj, async(err, emailData)=> {
                    if(err) {
                        res.status(400).send({status: false,message: err});
                    } else {
                        await sendEmail(req.body.data.borrower_email, "Invitation Email - Oqvest", emailData, (err, success)=> {
                            if(err){
                                res.status(400).send({status: false,message: err});
                            } else {
                                res.status(200).send({status: true, message: 'Co-Borrower has been added and Credentials to co-borrowers email has been sent.', data});
                            }
                        })
                    }
                })
            } else {
                const emailObj = {
                    username: req.body.data.borrower_first_name, 
                    type: 'Co-borrower',
                    senderName: req.body.senderName,
                    email: req.body.data.borrower_email,
                    password: null
                }
                await ejs.renderFile(InviteEmailTemplate, emailObj, async(err, emailData)=> {
                    if(err) {
                        res.status(400).send({status: false,message: err});
                    } else {
                        await sendEmail(req.body.data.borrower_email, "Invitation Email - Oqvest", emailData, (err, success)=> {
                            if(err){
                                res.status(400).send({status: false,message: err});
                            } else {
                                res.status(200).send({status: true, message: 'Co-Borrower has been added and Credentials to co-borrowers email has been sent.', data});
                            }
                        })
                    }
                })
            }
        } catch (error) {
            next(error);
        }
    },
    addRealEstate: async(req, res, next)=> {
        try {
            const dataObj = new RealEstate(req.body.data);
            const data = await RealEstate.Add(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.', data});
            }
        } catch (error) {
            next(error);
        }
    },
    addLoanVerification: async(req, res, next)=> {
        try {
            const dataObj = new LoanVerification(req.body.data);
            const data = await LoanVerification.Add(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.', data});
            }
        } catch (error) {
            next(error);
        }
    },
    addAddress: async(req, res, next)=> {
        try {
            const dataObj = new Address(req.body.data);
            const data = await Address.Add(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.', data});
            }
        } catch (error) {
            next(error);
        }
    },
    addRealtor: async(req, res, next)=> {
        try {
            const dataObj = new RealtorInfo(req.body.data);
            const data = await RealtorInfo.Add(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.'});
            }
        } catch (error) {
            next(error);
        }
    },
    addDeclaration: async(req, res, next)=> {
        try {
            const dataObj = new Declarations(req.body.data);
            const data = await Declarations.Add(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.'});
            }
        } catch (error) {
            next(error);
        }
    },
    addEmployment: async(req, res, next)=> {
        try {
            const dataObj = new Employment(req.body.data);
            const data = await Employment.Add(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.', data});
            }
        } catch (error) {
            next(error);
        }
    },
    addMonthlyIncome: async(req, res, next)=> {
        try {
            const dataObj = new MonthlyIncome(req.body.data);
            const data = await MonthlyIncome.Add(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.', data});
            }
        } catch (error) {
            next(error);
        }
    },
    addAssets: async(req, res, next)=> {
        try {
            const dataObj = new Assets(req.body.data);
            const data = await Assets.Add(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.', data});
            }
        } catch (error) {
            next(error);
        }
    },
    addLiabilities: async(req, res, next)=> {
        try {
            const dataObj = new Liabilities(req.body.data);
            const data = await Liabilities.Add(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.', data});
            }
        } catch (error) {
            next(error);
        }
    },
    addGifts: async(req, res, next)=> {
        try {
            const dataObj = new GiftsGrants(req.body.data);
            const data = await GiftsGrants.Add(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.', data});
            }
        } catch (error) {
            next(error);
        }
    },
    deleteEmployment: async(req, res, next)=> {
        try {
            const data = await Employment.Delete(req.params.id);
            if(data){
                res.status(200).send({status: true, message: 'Deleted successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    deleteMonthlyIncome: async(req, res, next)=> {
        try {
            const data = await MonthlyIncome.Delete(req.params.id);
            if(data){
                res.status(200).send({status: true, message: 'Deleted successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    deleteAssets: async(req, res, next)=> {
        try {
            const data = await Assets.Delete(req.params.id);
            if(data){
                res.status(200).send({status: true, message: 'Deleted successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    deleteLiabilities: async(req, res, next)=> {
        try {
            const data = await Liabilities.Delete(req.params.id);
            if(data){
                res.status(200).send({status: true, message: 'Deleted successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    deleteGifts: async(req, res, next)=> {
        try {
            const data = await GiftsGrants.Delete(req.params.id);
            if(data){
                res.status(200).send({status: true, message: 'Deleted successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    deleteBorrowers: async(req, res, next)=> {
        try {
            const data = await Borrowers.Delete(req.params.id, req.params.loan_id);
            if(data){
                res.status(200).send({status: true, message: 'Deleted successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    deleteAddress: async(req, res, next)=> {
        try {
            const data = await Address.Delete(req.params.id);
            if(data){
                res.status(200).send({status: true, message: 'Deleted successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    deleteRealEstate: async(req, res, next)=> {
        try {
            const data = await RealEstate.Delete(req.params.id);
            if(data){
                res.status(200).send({status: true, message: 'Deleted successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    getEmployment: async(req, res, next)=> {
        try {
            const data = await Employment.GetEmployment(req.params.id);
            if(data){
                res.status(200).send({status: true, data});
            }
        } catch (error) {
            next(error);
        }
    },
    getMonthlyIncome: async(req, res, next)=> {
        try {
            const data = await MonthlyIncome.GetMonthlyIncome(req.params.id);
            if(data){
                res.status(200).send({status: true, data});
            }
        } catch (error) {
            next(error);
        }
    },
    getAssets: async(req, res, next)=> {
        try {
            const data = await Assets.GetAssets(req.params.id);
            if(data){
                res.status(200).send({status: true, data});
            }
        } catch (error) {
            next(error);
        }
    },
    getLiabilities: async(req, res, next)=> {
        try {
            const data = await Liabilities.GetLiabilities(req.params.id);
            if(data){
                res.status(200).send({status: true, data});
            }
        } catch (error) {
            next(error);
        }
    },
    getGifts: async(req, res, next)=> {
        try {
            const data = await GiftsGrants.GetGifts(req.params.id);
            if(data){
                res.status(200).send({status: true, data});
            }
        } catch (error) {
            next(error);
        }
    },
    getBorrowers: async(req, res, next)=> {
        try {
            const data = await Borrowers.GetBorrowers(req.params.id);
            if(data){
                res.status(200).send({status: true, data});
            }
        } catch (error) {
            next(error);
        }
    },
    getAddress: async(req, res, next)=> {
        try {
            const data = await Address.GetAddress(req.params.id);
            if(data){
                res.status(200).send({status: true, data});
            }
        } catch (error) {
            next(error);
        }
    },
    getRealEstate: async(req, res, next)=> {
        try {
            const data = await RealEstate.GetRealEstate(req.params.id);
            if(data){
                res.status(200).send({status: true, data});
            }
        } catch (error) {
            next(error);
        }
    },
    updateEmployment: async(req, res, next)=> {
        try {
            const data = await Employment.Update(req.body);
            if(data){
                res.status(200).send({status: true, message: 'Updated successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    updateMonthlyIncome: async(req, res, next)=> {
        try {
            const data = await MonthlyIncome.Update(req.body);
            if(data){
                res.status(200).send({status: true, message: 'Updated successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    updateAssets: async(req, res, next)=> {
        try {
            const data = await Assets.Update(req.body);
            if(data){
                res.status(200).send({status: true, message: 'Updated successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    updateLiabilities: async(req, res, next)=> {
        try {
            const data = await Liabilities.Update(req.body);
            if(data){
                res.status(200).send({status: true, message: 'Updated successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    updateGifts: async(req, res, next)=> {
        try {
            const data = await GiftsGrants.Update(req.body);
            if(data){
                res.status(200).send({status: true, message: 'Updated successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    updateBorrowers: async(req, res, next)=> {
        try {
            const data = await Borrowers.Update(req.body);
            if(data){
                res.status(200).send({status: true, message: 'Updated successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    updateAddress: async(req, res, next)=> {
        try {
            const data = await Address.Update(req.body);
            if(data){
                res.status(200).send({status: true, message: 'Updated successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    updateRealEstate: async(req, res, next)=> {
        try {
            const data = await RealEstate.Update(req.body);
            if(data){
                res.status(200).send({status: true, message: 'Updated successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    updatePersonalInfo: async(req, res, next)=> {
        try {
            const data = await PersonalInfo.Update(req.body);
            if(data){
                res.status(200).send({status: true, message: 'Updated successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
    updateProperty: async(req, res, next)=> {
        try {
            const data = await Properties.Update(req.body);
            if(data){
                res.status(200).send({status: true, message: 'Updated successfully.'});
            }
        } catch (error) {
            next(error);
        }
    },
}

module.exports = loanController;