const router = require("express").Router();
const addressSuggesitionController = require('../Controllers/addressSuggesition.controller')

router.get('/suggesitions', addressSuggesitionController.get);

module.exports = router;