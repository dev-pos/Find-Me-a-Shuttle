const express = require('express');
const router = express.Router();
const tripController = require('../controllers/trips');

router.get('/', tripController.getToday);
router.get('/:tripId', tripController.getById);
router.get('/getByLoc/:loc1?/:loc2', tripController.getByLoc);
router.post('/', tripController.create);
// router.put('/:tripId', tripController.updateById);
// router.delete('/:movieId', tripController.deleteById);

module.exports = router;