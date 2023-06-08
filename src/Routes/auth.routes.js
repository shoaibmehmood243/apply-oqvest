const router = require("express").Router();
const authController = require('../Controllers/auth.controller')

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/forget-password', authController.forgetPassword);
router.post('/set-password/:token', authController.setPassword);

module.exports = router;