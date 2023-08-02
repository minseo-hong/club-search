const express = require('express');

const clubController = require('../controllers/club');

const router = express.Router();

router.get('/', clubController.getHome);
router.get('/clubs/:department', clubController.getClubList);
router.get('/club/:id', clubController.getClub);

module.exports = router;
