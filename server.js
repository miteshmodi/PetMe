// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");
require('dotenv').config();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, '/public')));

// Static directory
app.use(express.static("public"));

// NOTE: THE BELOW CODE IS ONLY FOR OUR REFERENCE TO GET STARTED
// Routes
// TODO - Modify routes as we work along
// =============================================================
// require("./routes/home-route.js")(app);
var routes = require("./routes/home-route.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
