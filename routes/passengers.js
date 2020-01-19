const express = require('express');
const router = express.Router();
const passengerAuthController = require('../controllers/authPassenger');

router.post('/signin/', passengerAuthController.signin);

module.exports = router;