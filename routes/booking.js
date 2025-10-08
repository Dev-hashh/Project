const express = require('express');
const router = express.Router({mergeParams: true}); // Use mergeParams to access params from the parent route

const Listing  = require('../models/listing');
const wrapAsync = require('../utils/wrapAsync');
//const ExpressError = require('../utils/ExpressError');
//const { listingSchema} = require('../schema.js');
const { isLoggedIn, saveRedirectUrl, isOwner, validateListing } = require('../middleware.js');
const bookingController = require('../controllers/bookings.js');


router.route('/')
  .get(isLoggedIn, bookingController.index); // Use the bookingForm method from the listingController

module.exports = router;