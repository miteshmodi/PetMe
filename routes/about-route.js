const path = require('path');

const express = require('express');

const homepageController = require('../controllers/about');

const router = express.Router();

router.get('/aboutus', homepageController.getAboutPage);

module.exports = router;