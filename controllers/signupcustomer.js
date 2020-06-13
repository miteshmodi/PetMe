var db = require("../models");
const path = require('path');

// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
exports.getSignupPage = (req, res, next) => {
    res.render('signupcustomer', {
        title: 'Register',
        css: ['index.css', 'style.css'],
        js: ['signup.js']
    });
};

exports.postSignupPage = (req, res, next) => {
    db.Customers.create(req.body).then(function () {
        res.redirect("/login");
    });
    
};