var express = require("express");
var exphbs = require("express-handlebars");
// var session = require("express-session");
var router = express.Router();
const path = require("path");

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
//app.use(session({
//  secret: process.env.SESSION_SECRET,
// resave: false,
//saveUninitialized: true //
//}));
// app.use(express.static(path.join(__dirname, '/public')));

// Static directory
app.use(express.static("public"));
//app.use(passport.session());


// NOTE: THE BELOW CODE IS ONLY FOR OUR REFERENCE TO GET STARTED
// Routes
// TODO - Modify routes as we work along
// =============================================================
// require("./routes/home-route.js")(app);
var routes = require("./routes/home-route.js");

var aboutRoutes = require("./routes/about-route.js");
var contactRoutes = require("./routes/contact-route.js");
var loginRoutes = require("./routes/login-route.js");

var adminregroute = require("./routes/registeradmin-route.js");


app.use(routes);

app.use(aboutRoutes, router);
app.use(contactRoutes, router);
app.use(loginRoutes, router);

app.use(adminregroute);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
  force: true
}).then(function () {
  app.listen(PORT, function () {

    console.log("App listening on PORT " + PORT);
  });
});