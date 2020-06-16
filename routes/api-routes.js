var db = require("../models");
const path = require('path');
const express = require('express');
const router = express.Router();

// GET route for getting all of the pets
router.get("/api/pets/", function (req, res) {
    db.Pets.findAll({})
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific type
router.get("/api/pets/pet_type/:pet_type", function (req, res) {
    db.Pets.findAll({
        where: {
            pet_type: req.params.pet_type
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific breed
router.get("/api/pets/breed/:breed", function (req, res) {
    db.Pets.findAll({
        where: {
            breed: req.params.breed
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific age
router.get("/api/pets/age/:age", function (req, res) {
    db.Pets.findAll({
        where: {
            age: req.params.age
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific zip code
router.get("/api/pets/zip_code/:zip_code", function (req, res) {
    db.Pets.findAll({
        where: {
            zip_code: req.params.zip_code
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific type, breed, age, and zip code
router.get("/api/pets/pet_type/:pet_type/breed/:breed/age/:age/zip_code/:zip_code", function (req, res) {
    db.Pets.findAll({
        where: {
            pet_type: req.params.pet_type,
            breed: req.params.breed,
            age: req.params.age,
            zip_code: req.params.zip_code
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific type, breed, and age
router.get("/api/pets/pet_type/:pet_type/breed/:breed/age/:age", function (req, res) {
    db.Pets.findAll({
        where: {
            pet_type: req.params.pet_type,
            breed: req.params.breed,
            age: req.params.age
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific type and breed
router.get("/api/pets/pet_type/:pet_type/breed/:breed", function (req, res) {
    db.Pets.findAll({
        where: {
            pet_type: req.params.pet_type,
            breed: req.params.breed
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific type and age
router.get("/api/pets/pet_type/:pet_type/age/:age", function (req, res) {
    db.Pets.findAll({
        where: {
            pet_type: req.params.pet_type,
            age: req.params.age
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific type and zip code
router.get("/api/pets/pet_type/:pet_type/zip_code/:zip_code", function (req, res) {
    db.Pets.findAll({
        where: {
            pet_type: req.params.pet_type,
            zip_code: req.params.zip_code
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific breed, and zip code
router.get("/api/pets/breed/:breed/zip_code/:zip_code", function (req, res) {
    db.Pets.findAll({
        where: {
            breed: req.params.breed,
            zip_code: req.params.zip_code
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific age and zip code
router.get("/api/pets/age/:age/zip_code/:zip_code", function (req, res) {
    db.Pets.findAll({
        where: {
            age: req.params.age,
            zip_code: req.params.zip_code
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific breed, age, and zip code
router.get("/api/pets/breed/:breed/age/:age/zip_code/:zip_code", function (req, res) {
    db.Pets.findAll({
        where: {
            breed: req.params.breed,
            age: req.params.age,
            zip_code: req.params.zip_code
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific breed and age
router.get("/api/pets/breed/:breed/age/:age", function (req, res) {
    db.Pets.findAll({
        where: {
            breed: req.params.breed,
            age: req.params.age
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific type, age, and zip code
router.get("/api/pets/pet_type/:pet_type/age/:age/zip_code/:zip_code", function (req, res) {
    db.Pets.findAll({
        where: {
            pet_type: req.params.pet_type,
            age: req.params.age,
            zip_code: req.params.zip_code
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});

// GET route for returning pets of a specific type, breed, and zip code
router.get("/api/pets/pet_type/:pet_type/breed/:breed/zip_code/:zip_code", function (req, res) {
    db.Pets.findAll({
        where: {
            pet_type: req.params.pet_type,
            breed: req.params.breed,
            zip_code: req.params.zip_code
        }
    })
        .then(function (dbPets) {
            res.json(dbPets);
        });
});


module.exports = router;

