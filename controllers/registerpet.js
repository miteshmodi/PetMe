// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
const axios = require('axios');
var db = require("../models");

exports.getListPet = (req, res, next) => {
    res.render('listpet', {
        title: 'Register Pet',
        css: ['index.css'],
        js: ['dropdownitems.js']
         
    });
};

exports.getPetSearchResults = (req, res, next) => {

    db.Pets.findAll({})
    .then(function (dbPets) {
        res.render('petresult', {
            title: 'Search Result',
            css: ['index.css'],
            pets: dbPets         
        });
    });

    
};

exports.postListPet = (req, res, next) => {
    req.body.image = req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;
    req.body.AdminId = 1;
    console.log(req.body);
    db.Pets.create(req.body).then(function (dbPost) {
        res.redirect("/findallpets");
    });
};