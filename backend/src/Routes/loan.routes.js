const router = require("express").Router();
const loanController = require('../Controllers/loan.Controller')

router.get('/:client_id', loanController.getLoanApplication);
router.get('/get/:id', loanController.getLoanData);
router.post('/application', loanController.addLoanApplication);
router.patch('/', loanController.updateLoanApplication);
router.post('/personal-info', loanController.addPersonalInfo);
router.post('/property', loanController.addProperty);
router.patch('/martial-status', loanController.updateMarialStatus);
router.post('/borrowers', loanController.addBorrowers);
router.post('/address', loanController.addAddress);
router.post('/realtor-info', loanController.addRealtor);
router.post('/declaration', loanController.addDeclaration);
router.post('/real-estate', loanController.addRealEstate);
router.post('/loan-verification', loanController.addLoanVerification);
router.post('/employment', loanController.addEmployment);
router.post('/monthly-income', loanController.addMonthlyIncome);
router.post('/assets', loanController.addAssets);
router.post('/liabilities', loanController.addLiabilities);
router.post('/gifts-grants', loanController.addGifts);

module.exports = router;