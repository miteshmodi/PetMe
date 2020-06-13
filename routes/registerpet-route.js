var db = require("../models");

const path = require('path');

const express = require('express');

const registerPetController = require('../controllers/registerpet.js');

const router = express.Router();

router.get('/listpet', registerPetController.getListPet);
router.post('/listpet', registerPetController.postListPet);

module.exports = router;
