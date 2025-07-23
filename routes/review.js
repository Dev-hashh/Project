const express = require('express');
const router = express.Router({mergeParams: true});
const Review = require('../models/review');
const Listing = require('../models/listing');
const wrapAsync = require('../utils/wrapAsync');
const ExpressError = require('../utils/ExpressError');
const { validateReview, isLoggedIn, isReviewAuthor} = require('../middleware.js'); // Import the validateReview middleware
const reviewController = require('../controllers/reviews');


//HANDLING REVIEWS
//Post Route
router.post('/',isLoggedIn, validateReview, wrapAsync(reviewController.postReview));
  
//Delete Route
router.delete('/:reviewId',isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));
  

  module.exports = router;