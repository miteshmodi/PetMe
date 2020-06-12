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
    var adminpost = "";
    db.Admin.create(req.body).then(function (dbPost) {
        adminpost = JSON.stringify(dbPost);
    });

    res.render('registeradmin', {
        title: 'Register Admin',
        css: ['index.css', 'registeradmin.css'],
        js: ['registeradminform.js'],
        result: adminpost
    });
};