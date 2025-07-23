const User = require('../models/user');
// const Listing = require('../models/listing');
// const passport = require('passport');
// const ExpressError = require('../utils/ExpressError');

module.exports.renderSignupForm = (req, res) => {
    res.render('users/signup');
};

module.exports.signup = async (req, res) => {
    try{
        let { username, email, password } = req.body;
        let newUser = new User({ username, email });

        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash('success', 'Successfully signed up!');
            res.redirect('/listings');
        });
        
    }catch(e){
        req.flash('error', e.message);
        res.redirect('/signup');
    }
};


module.exports.renderLoginForm = (req, res) => {
    res.render('users/login');
};


module.exports.login = async (req, res) => {
    const { username } = req.body;
 
    req.flash('success', `Welcome back, ${username}!`);
    //console.log(req.user);
    let redirectUrl = res.locals.redirectTo || '/listings' ; // Use the saved URL or default to '/listings'
    //console.log('Redirecting to:', redirectUrl);
    // delete req.session.redirectUrl; // Clear the redirect URL after use
    res.redirect(redirectUrl); // Redirect to the saved URL or default to '/listings'
 };
 
 module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Logged out successfully!');
        res.redirect('/listings');
    });
 }