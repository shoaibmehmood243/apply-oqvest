const router = require("express").Router();
const testController = require('../Controllers/test.controller')

router.post('/submit', testController.submit);

module.exports = router;