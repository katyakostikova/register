const router = require('express').Router();
const massMediaController = require('../controllers/MassMediaController');

router.get('/new', massMediaController.getMassMediaData);
router.get('/all', massMediaController.getMassMedias);
router.get('/filtered', massMediaController.getFilteredMassMedias);
router.get('/:id', massMediaController.getMassMediaById);
router.get('/', massMediaController.getHomePage);
router.post('/', massMediaController.addMassMedia);

module.exports = router;