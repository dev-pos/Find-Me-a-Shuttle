const express = require('express');
const router = express.Router();
const locationsController = require('../controllers/locations');

router.get('/', locationsController.getAll);
router.get('/:locationId', locationsController.getById);

module.exports = router;