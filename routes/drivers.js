const express = require('express');
const router = express.Router();
const driverAuthController = require('../controllers/authDriver');

router.post('/signin/', driverAuthController.signin);

module.exports = router;