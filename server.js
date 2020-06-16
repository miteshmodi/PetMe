var express = require("express");
var exphbs = require("express-handlebars");

var router = express.Router();
var db = require("./models");
const path = require("path");
// const fs = require("fs");
const bodyParser = require("body-parser");
const sendMail = require("./public/js/mail");
// const multer = require("multer");

// const data = require("./public/submitcontact");
// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === 'image/png' ||
//     file.mimetype === 'image/jpg' ||
//     file.mimetype === 'image/jpeg' ||
//     file.mimetype === 'image/JPG'
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'images');
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString() + '-' + file.originalname);
//   }
// });

const nodemailer = require("nodemailer");

require('dotenv').config();

var app = express();
var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./routes/home-route.js");
var aboutRoutes = require("./routes/about-route.js");
var contactRoutes = require("./routes/contact-route.js");
var loginRoutes = require("./routes/login-route.js");
var adminregroute = require("./routes/registeradmin-route.js");
var signuproute = require("./routes/signup-route.js");
var listpet = require("./routes/registerpet-route.js");
var logadminroute = require("./routes/loginadmin-route.js");


// Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({
  extended: true
}));
// app.use(
//   multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
// );
app.use(express.json());

// Static directory
app.use(express.static("public"));
// Static folder ----needed for contact submit
// app.use(express.static(path.join(__dirname, "public")));
// app.use('/images', express.static(path.join(__dirname, 'images')));

//app.use(passport.session());


// NOTE: THE BELOW CODE IS ONLY FOR OUR REFERENCE TO GET STARTED
// Routes
// TODO - Modify routes as we work along
// =============================================================

app.use(routes);
app.use(aboutRoutes, router);
app.use(contactRoutes, router);
app.use(loginRoutes, router);
app.use(adminregroute);
app.use(signuproute);
app.use(listpet);
app.use(logadminroute);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
  force: false
}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});