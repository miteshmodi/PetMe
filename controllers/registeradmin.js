var db = require("../models");
// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
exports.registerAdmin = (req, res, next) => {
    res.render('registeradmin', {
        title: 'Register Admin',
        // css: [ 'index.css', 'registeradmin.css' ],
        js: ['registeradminform.js']
    });
};

exports.postAdmin = (req, res) => {
    db.Admin.create(req.body).then(function (dbPost) {
        res.redirect("/login");
    });
};