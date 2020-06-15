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
        else {
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
                        js:['registernewpet.js', 'dropdownitems.js'],
                        adminId: adminMatch[0].id
                    });
                }
            });
        }

    });
};
