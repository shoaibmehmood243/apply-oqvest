const router = require("express").Router();
const loanController = require('../Controllers/loan.Controller')

router.get('/:client_id', loanController.getLoanApplication);
router.post('/application', loanController.addLoanApplication);
router.patch('/', loanController.updateLoanApplication);
router.post('/personal-info', loanController.addPersonalInfo);
router.post('/property', loanController.addProperty);
router.post('/martial-status', loanController.addMarialStatus);
router.post('/borrowers', loanController.addBorrowers);
router.post('/real-estate', loanController.addRealEstate);
router.post('/loan-verification', loanController.addLoanVerification);
router.post('/employment', loanController.addEmployment);
router.post('/monthly-income', loanController.addMonthlyIncome);
router.post('/assets', loanController.addAssets);
router.post('/liabilities', loanController.addLiabilities);
router.post('/gifts-grants', loanController.addGifts);

module.exports = router;