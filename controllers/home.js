// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
const axios = require('axios');

exports.getDefaultPage = (req, res, next) => {
    res.render('index', {
        title: 'PetMe | Home',
        css: ['index.css'],
        js: ['dropdownitems.js']
    });
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