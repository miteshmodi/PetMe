
// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
exports.getDefaultPage = (req, res, next) => {
    res.render('index' , {
        title: 'PetMe | Home',
        css: [ 'index.css' ],
        js: ['geolocator.js']
    });
};
