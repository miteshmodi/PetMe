var db = require("../models");

module.exports = function (app) {

    // GET route for getting all of the pets
    app.get("/api/pets/", function (req, res) {
        db.Pets.findAll({})
            .then(function (dbPets) {
                res.json(dbPets);
            });
    });

    // GET route for returning pets of a specific type
    app.get("/api/pets/pet_type/:pet_type", function (req, res) {
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
    app.get("/api/pets/breed/:breed", function (req, res) {
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
    app.get("/api/pets/age/:age", function (req, res) {
        db.Pets.findAll({
            where: {
                age: req.params.age
            }
        })
            .then(function (dbPets) {
                res.json(dbPets);
            });
    });

    // GET route for returning pets of a specific type, breed, and age
    app.get("/api/pets/pet_type/:pet_type/breed/:breed/age/:age", function (req, res) {
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
    app.get("/api/pets/pet_type/:pet_type/breed/:breed", function (req, res) {
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
    app.get("/api/pets/pet_type/:pet_type/age/:age", function (req, res) {
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

    // GET route for returning pets of a specific breed and age
    app.get("/api/pets/breed/:breed/age/:age", function (req, res) {
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
};