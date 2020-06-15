var db = require("../models");
const path = require('path');

// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
exports.getLoginAdmin = (req, res, next) => {
    res.render('loginpage', {
        title: 'Login',
        css: ['index.css', 'style.css'],
        js: ['loginadmin.js']
    });
};

exports.postLoginAdmin = (req, res, next) => {
    var userEmail = req.body.email,
        userPw = req.body.password;

    db.Admin.findAll({
        where: {
            email: userEmail,
            password: userPw
        }
    }).then(function (adminMatch) {
        if (adminMatch.length === 1) {
            res.render('listpet', {
                title: 'Register Pet',
                css: ['index.css'],
                js: ['registernewpet.js', 'dropdownitems.js'],
                adminId: adminMatch[0].id
            });
        }
    });
};
