var db = require("../models");
const path = require('path');

// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
exports.getLoginPage = (req, res, next) => {
    res.render('loginpage', {
        title: 'Login',
        css: ['index.css', 'style.css'],
        js: ['loginuser.js']
    });
};

exports.postLoginPage = (req, res, next) => {
    var userEmail = req.body.email,
        userPw = req.body.password;
    
    db.Customers.findAll({
        where: {
            email: userEmail,
            password: userPw
        }
    }).then(function (customerMatch) {
        if (customerMatch.length === 1) {
            res.redirect('/');
        }
    });
};
