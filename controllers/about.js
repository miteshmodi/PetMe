// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
exports.getAboutPage = (req, res, next) => {
    res.render('about', {
        title: 'PetMe | About',
        css: ['style.css']
    });
};