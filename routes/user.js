const express = require('express');
const router = express.Router({mergeParams: true}); // Use mergeParams to access params from the parent route

//const User = require('../models/user.js'); // Import the User model
// const passport = require('passport');
const wrapAsync = require('../utils/wrapAsync');
// const ExpressError = require('../utils/ExpressError');
const passport = require('passport');

const { saveRedirectUrl } = require('../middleware.js');
const userController = require('../controllers/users.js');  
//const review = require('../models/review.js');


router.route('/signup')
  .get(userController.renderSignupForm) // Use the renderSignupForm method from the userController
  .post(wrapAsync(userController.signup)); // Use the signup method from the userController

// router.get('/signup', userController.renderSignupForm);
// router.post('/signup', wrapAsync(userController.signup));


router.route('/login')
  .get(userController.renderLoginForm) // Use the renderLoginForm method from the userController
  .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true}), userController.login); // Use the login method from the userController

// router.get('/login', userController.renderLoginForm);
// router.post('/login',saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true}), userController.login);

router.get('/logout', userController.logout);

module.exports = router;