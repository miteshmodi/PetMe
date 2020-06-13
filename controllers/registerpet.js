// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
const axios = require('axios');

exports.getListPet = (req, res, next) => {
    res.render('listpet', {
        title: 'Register Pet',
        css: ['index.css']
    });
};

exports.postListPet = (req, res, next) => {
   
};