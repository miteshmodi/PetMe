const path = require('path');

const express = require('express');

const homepageController = require('../controllers/contact');

const router = express.Router();

router.get('/contact', homepageController.getAboutPage);

module.exports = router;