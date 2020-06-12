// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
exports.getAboutPage = (req, res, next) => {
    res.render('aboutuspage', {
        title: 'About Us',
        css: ['index.css', 'registeradmin.css', 'style.css']
    });
};