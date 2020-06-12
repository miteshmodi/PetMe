// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
exports.getContactPage = (req, res, next) => {
    res.render('contactuspage', {
        title: 'Contact Us',
        css: ['index.css', 'registeradmin.css', 'style.css']
    });
};