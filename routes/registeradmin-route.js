var db = require("../models");

const path = require('path');

const express = require('express');

const registerAdminController = require('../controllers/registeradmin.js');

const router = express.Router();

router.get('/registeradmin', registerAdminController.registerAdmin);
router.post('/registeradmin', registerAdminController.postAdmin);

module.exports = router;
