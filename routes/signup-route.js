var db = require("../models");

const path = require('path');

const express = require('express');

const registerController = require('../controllers/signupcustomer.js');

const router = express.Router();

router.get('/register', registerController.getSignupPage);
router.post('/register', registerController.postSignupPage);

module.exports = router;
