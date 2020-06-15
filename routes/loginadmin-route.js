const path = require('path');

const express = require('express');

const loginAdminController = require('../controllers/loginadmin');

const router = express.Router();

router.get('/loginadmin', loginAdminController.getLoginAdmin);

router.post('/loginadmin', loginAdminController.postLoginAdmin);

module.exports = router;