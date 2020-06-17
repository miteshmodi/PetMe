const path = require('path');

const express = require('express');

const homepageController = require('../controllers/home');

const router = express.Router();

router.get('/', homepageController.getDefaultPage);

router.put('/geolocation', homepageController.getZipCode);

router.post('/', homepageController.postDefaultPage);

router.put('/', homepageController.putDefaultPage);

module.exports = router;
