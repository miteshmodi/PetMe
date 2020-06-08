/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
/* eslint-disable semi */
/* eslint-disable quotes */
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require("express");
const app = express();
const bcrypt = require("bcrypt"); // installed *bcrypt* to ensure the application is entirely secure *//
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

//Library - method-override allows us to override our method we're using (i.e instead of using POST, we actually call the delete method). 
const methodOverride = require("method-override");

const initializePassport = require("./passport-config")
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

const users = [] // Much easier to use.



app.set("view-engine", "ejs")
app.use(express.urlencoded({
    extended: false
}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

// _method is what we're going to pass for our method
app.use(methodOverride("_method"));

// checkAuthenticated - will redirect the user to the login page
app.get("/", checkAuthenticated, (req, res) => {
    res.render("index.ejs", {
        name: req.user.name
    })
})

// Login Route
app.get("/login", checknotAuthenticated, (req, res) => {
    res.render("login.ejs")
});

// POST route for login //
app.post("/login", checknotAuthenticated, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true // Allows us to display a flash message
}));

// Register route
app.get("/register", checknotAuthenticated, (req, res) => {
    res.render("register.ejs")
});

// POST route for registering
app.post("/register", checknotAuthenticated, async (req, res) => {
    // We have the hashedPassword which we can store in our database ;
    // 10- how many times we want to generate that hash/how secure we want it to be //
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(), // this will be automatically generated since we will be using a database. //
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword // Using hashpassword here since it is safe to store in our database. //

        });
        res.redirect("/login")
    } catch {
        res.redirect("/register")
    }
    // console.log(users)
});

// This logs our user/guest out
app.delete("/logout", (req, res) => {

    // clears the session and logs the user out
    req.logOut();
    res.redirect("/login");

});

// Protects all of the different routes for when not logged in, preventing non-logged in users to access sensitive information.
// this is essentially a middleware function, 
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect("/login")
}

// Allows already logged in user to not return to login in page
function checknotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/")
    }
    next();

}

app.listen(3000);
console.log("App listening on PORT ");