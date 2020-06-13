var express = require("express");
var exphbs = require("express-handlebars");
var router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const sendMail = require("./public/js/mail");
// const data = require("./public/submitcontact");



const nodemailer = require("nodemailer");

require('dotenv').config();

var app = express();
var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Static directory
app.use(express.static("public"));
// Static folder ----needed for contact submit
app.use("/public", express.static(path.join(__dirname, "public")));

//app.use(passport.session());


// NOTE: THE BELOW CODE IS ONLY FOR OUR REFERENCE TO GET STARTED
// Routes
// TODO - Modify routes as we work along
// =============================================================

var routes = require("./routes/home-route.js");

var aboutRoutes = require("./routes/about-route.js");
var contactRoutes = require("./routes/contact-route.js");
var loginRoutes = require("./routes/login-route.js");
var adminregroute = require("./routes/registeradmin-route.js");
var signuproute = require("./routes/signup-route.js");
var listpet = require("./routes/registerpet-route.js");


app.use(routes);
app.use(aboutRoutes, router);
app.use(contactRoutes, router);
app.use(loginRoutes, router);
app.use(adminregroute);
app.use(signuproute);
app.use(listpet);



// app.get("/contact", (req, res) => {
//   res.render("contactuspage");
// });




// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
  force: false
}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});