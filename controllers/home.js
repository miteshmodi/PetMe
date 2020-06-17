// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
const axios = require('axios');
var db = require("../models");

exports.getDefaultPage = (req, res, next) => {
    console.log("GET: " + JSON.stringify(req.body));
    res.render('index', {
        title: 'PetMe | Home',
        css: ['index.css'],
        pets: req.body
    });
};

exports.postDefaultPage = (req, res, next) => {
    console.log("POST: " + JSON.stringify(req.body));
    let age = req.body.age;
    let pet_type = req.body.pet_type;
    let zip_code = req.body.zip_code;
    let breed = req.body.breed;
    let milesinrange = req.body.milesinrange;

    if (age.includes("Age")) {
        age = "";
    }

    if (pet_type.includes("Pet Type")) {
        pet_type = "";
    }

    if (milesinrange.includes("Miles within")) {
        milesinrange = "";
    }

    if (age && pet_type && zip_code && breed) {
        db.Pets.findAll({
            where: {
                age: age,
                pet_type: pet_type,
                zip_code: zip_code,
                breed: breed
            }
        })
            .then(function (dbPets) {
                res.render('index', {
                    title: 'PetMe | Home',
                    css: ['index.css'],
                    pets: dbPets
                });
            });

    }
    else if (age && pet_type && zip_code) {
        db.Pets.findAll({
            where: {
                age: age,
                pet_type: pet_type,
                zip_code: zip_code
            }
        })
            .then(function (dbPets) {
                res.render('index', {
                    title: 'PetMe | Home',
                    css: ['index.css'],
                    pets: dbPets
                });
            });
    }
    else if (age && pet_type) {
        db.Pets.findAll({
            where: {
                age: age,
                pet_type: pet_type
            }
        })
            .then(function (dbPets) {
                res.render('index', {
                    title: 'PetMe | Home',
                    css: ['index.css'],
                    pets: dbPets
                });
            });
    }
    else if (age) {
        db.Pets.findAll({
            where: {
                age: age
            }
        })
            .then(function (dbPets) {
                res.render('index', {
                    title: 'PetMe | Home',
                    css: ['index.css'],
                    pets: dbPets
                });
            });
    } else {
        db.Pets.findAll({})
            .then(function (dbPets) {
                res.render('index', {
                    title: 'PetMe | Home',
                    css: ['index.css'],
                    pets: dbPets
                });
            });
    }
};

exports.putDefaultPage = (req, res, next) => {
    console.log("PUT: " + req.body);
    let age = req.body.age;
    let pet_type = req.body.pet_type;
    let zip_code = req.body.zip_code;
    let breed = req.body.breed;
    let milesinrange = req.body.milesinrange;

    if (age.includes("Age")) {
        age = "";
    }

    if (pet_type.includes("Pet Type")) {
        pet_type = "";
    }

    if (milesinrange.includes("Miles within")) {
        milesinrange = "";
    }

    if (age && pet_type && zip_code && breed) {
        db.Pets.findAll({
            where: {
                age: age,
                pet_type: pet_type,
                zip_code: zip_code,
                breed: breed
            }
        })
            .then(function (dbPets) {
                res.render('index', {
                    title: 'PetMe | Home',
                    css: ['index.css'],
                    pets: dbPets
                });
            });

    }
    else if (age && pet_type && zip_code) {
        db.Pets.findAll({
            where: {
                age: age,
                pet_type: pet_type,
                zip_code: zip_code
            }
        })
            .then(function (dbPets) {
                res.render('index', {
                    title: 'PetMe | Home',
                    css: ['index.css'],
                    pets: dbPets
                });
            });
    }
    else if (age && pet_type) {
        db.Pets.findAll({
            where: {
                age: age,
                pet_type: pet_type
            }
        })
            .then(function (dbPets) {
                res.render('index', {
                    title: 'PetMe | Home',
                    css: ['index.css'],
                    pets: dbPets
                });
            });
    }
    else if (age) {
        db.Pets.findAll({
            where: {
                age: age
            }
        })
            .then(function (dbPets) {
                res.render('index', {
                    title: 'PetMe | Home',
                    css: ['index.css'],
                    pets: dbPets
                });
            });
    } else {
        db.Pets.findAll({})
            .then(function (dbPets) {
                res.render('index', {
                    title: 'PetMe | Home',
                    css: ['index.css'],
                    pets: dbPets
                });
            });
    }
};

exports.getZipCode = (req, res, next) => {
    console.log(req.body);
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;

    axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.GEOLOCATION_API_KEY}`)
        .then(function (response) {
            res.json(response.data)
        });
};