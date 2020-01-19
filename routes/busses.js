const express = require('express');
const router = express.Router();
const bussesController = require('../controllers/busses');

router.get('/', bussesController.getAll);
router.get('/:busId', bussesController.getById);

module.exports = router;