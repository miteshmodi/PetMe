// rendering index.handlebars with title attributes, 
// passing only necessary css files and js files dynamically
exports.getContactPage = (req, res, next) => {
    res.render('contactuspage', {
        title: 'Contact Us',
        css: ['index.css', 'style.css'],
        js: ["submitcontact.js", "mail.js"],
        api_key: process.env.MAILGUNAPI_KEY,
        domain: process.env.SANDBOXDOM_NAME
    });
};