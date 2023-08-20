const router = require("express").Router();
const loanController = require('../Controllers/loan.Controller')

router.get('/:id', loanController.getLoanApplication);
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

// Delete
router.delete('/employment/:id', loanController.deleteEmployment);
router.delete('/monthly-income/:id', loanController.deleteMonthlyIncome);
router.delete('/assets/:id', loanController.deleteAssets);
router.delete('/liabilities/:id', loanController.deleteLiabilities);
router.delete('/gifts-grants/:id', loanController.deleteGifts);
router.delete('/borrowers/:id/:loan_id', loanController.deleteBorrowers);
router.delete('/address/:id', loanController.deleteAddress);
router.delete('/real-estate/:id', loanController.deleteRealEstate);

// GET
router.get('/application/:id', loanController.getApplication);
router.get('/personal-info/:id', loanController.getPersonalInfo);
router.get('/property/:id', loanController.getProperty);
router.get('/employment/:id', loanController.getEmployment);
router.get('/monthly-income/:id', loanController.getMonthlyIncome);
router.get('/assets/:id', loanController.getAssets);
router.get('/liabilities/:id', loanController.getLiabilities);
router.get('/gifts-grants/:id', loanController.getGifts);
router.get('/borrowers/:id', loanController.getBorrowers);
router.get('/address/:id', loanController.getAddress);
router.get('/real-estate/:id', loanController.getRealEstate);

// Delete
router.patch('/employment', loanController.updateEmployment);
router.patch('/monthly-income', loanController.updateMonthlyIncome);
router.patch('/assets', loanController.updateAssets);
router.patch('/liabilities', loanController.updateLiabilities);
router.patch('/gifts-grants', loanController.updateGifts);
router.patch('/borrowers', loanController.updateBorrowers);
router.patch('/address', loanController.updateAddress);
router.patch('/real-estate', loanController.updateRealEstate);
router.patch('/personal-info', loanController.updatePersonalInfo);
router.patch('/property', loanController.updateProperty);

module.exports = router;