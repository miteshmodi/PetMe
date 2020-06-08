/* eslint-disable semi */
/* eslint-disable quotes */
// Here we will put in all passport related information. //

const LocalStrategy = require("passport-local").Strategy;

// Ensures the users password matches the password passed. //
const bcrypt = require("bcrypt");




function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (email, password, done) => {

        const user = getUserByEmail(email);
        if (user == null) {
            return done(null, false, {
                message: "Sorry! No User guest with that email"
            });
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, {
                    message: "Password Incorrect"
                });
            }
        } catch (e) {
            return done(e);
        };

    };
    passport.use(new LocalStrategy({
            usernameField: "email"
        },
        authenticateUser))

    // This will serialize our user to store inside of the session. //
    passport.serializeUser((user, done) => done(null, user.id));

    // This will deserialize our user to store inside of the session. //
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
};





module.exports = initialize;