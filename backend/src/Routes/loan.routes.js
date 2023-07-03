const router = require("express").Router();
const loanController = require('../Controllers/loan.Controller')

router.post('/purchase', loanController.addPurchaseLoan);

module.exports = router;