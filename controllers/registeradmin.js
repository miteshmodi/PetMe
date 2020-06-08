
// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
exports.getDefaultPage = (req, res, next) => {
    res.render('resgisteradmin' , {
        title: 'Register Admin',
        css: [ 'index.css', 'registeradmin.css' ]
    });
};
