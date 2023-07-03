const LoanApplications = require('../Models/loan.model');

const loanController = {
    addPurchaseLoan: async(req, res, next)=> {
        try {
            const data = await LoanApplications.AddPurchaseLoan(id);
            if(data){
                res.status(200).send({status: true, message: 'Loan Application submitted.'});
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = loanController;