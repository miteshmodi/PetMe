var db = require("../models");

const path = require('path');

const express = require('express');
const { body } = require('express-validator/check');

const registerPetController = require('../controllers/registerpet');
const multer = require('../controllers/multer');

const router = express.Router();

router.get('/listpet', registerPetController.getListPet);
router.post('/listpet', multer.upload.single('image'), registerPetController.postListPet);
router.get('/findallpets', registerPetController.getPetSearchResults);

module.exports = router;

