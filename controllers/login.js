// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
exports.getLoginPage = (req, res, next) => {
    res.render('loginpage', {
        title: 'Login',
        css: ['index.css', 'registeradmin.css', 'style.css']
    });
};