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
                res.status(200).send({status: true, message: 'Loan Application submitted.'});
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
                res.status(200).send({status: true, message: 'Loan Application submitted.'});
            }
        } catch (error) {
            next(error);
        }
    },
    addMarialStatus: async(req, res, next)=> {
        try {
            const dataObj = new Spouse(req.body.data);
            const data = await Spouse.Add(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.'});
            }
        } catch (error) {
            next(error);
        }
    },
    addBorrowers: async(req, res, next)=> {
        try {
            const dataObj = new Borrowers(req.body.data);
            const data = await Borrowers.Add(dataObj);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.'});
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
                res.status(200).send({status: true, message: 'Loan Application submitted.'});
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
                res.status(200).send({status: true, message: 'Loan Application submitted.'});
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
                res.status(200).send({status: true, message: 'Loan Application submitted.'});
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
                res.status(200).send({status: true, message: 'Loan Application submitted.'});
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
                res.status(200).send({status: true, message: 'Loan Application submitted.'});
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
                res.status(200).send({status: true, message: 'Loan Application submitted.'});
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
                res.status(200).send({status: true, message: 'Loan Application submitted.'});
            }
        } catch (error) {
            next(error);
        }
    },
}

module.exports = loanController;