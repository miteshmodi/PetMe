// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
const axios = require('axios');
var db = require("../models");

exports.getListPet = (req, res, next) => {
    res.render('listpet', {
        title: 'Register Pet',
        css: ['index.css'],
        js:['registernewpet.js', 'dropdownitems.js']
    });
};

exports.postListPet = (req, res, next) => {
    db.Pets.create(req.body).then(function (dbPost) {
        console.log(dbPost);
        res.redirect("/api/pets/");
    });
};