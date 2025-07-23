const Listing = require('./models/listing'); // Assuming you have a Listing model defined
const Review = require('./models/review'); // Assuming you have a Review model defined
const User = require('./models/user'); // Assuming you have a User model defined
const ExpressError = require('./utils/ExpressError');
const { listingSchema, reviewSchema } = require('./schema.js'); // Assuming you have a schema defined for
const wrapAsync = require('./utils/wrapAsync');

// Check if the user is authenticated before allowing them to create a listing

  module.exports.isLoggedIn = (req, res, next) => {
    //console.log(req.path, "...", req.originalUrl);
    console.log("isAuthenticated? ", req.isAuthenticated());
    console.log("req.user: ", req.user);
    // Check if the user is authenticated
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        // If not, flash an error message and redirect to the login page
        req.flash('error', 'You must be logged in to do that!');
        return res.redirect('/login');
    }
    next();
  }

  module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectTo = req.session.redirectUrl;

    }
    next();
  }


  module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    
    
    // Check if the current user is the owner of the listing
    if (!listing.owner.equals(req.user._id)) {
      req.flash('error', 'You do not have permission to do that!');
      return res.redirect(`/listings/${id}`); // Redirect to the listing's show page if user is not the owner
    }
    
    next();
  }


  module.exports.validateListing = (req, res, next) => {
    const data = req.body; // fallback to flat if needed
    let { error } = listingSchema.validate(data);
  
    if(error){
      let errMsg = error.details.map((el) => el.message).join(",");
      throw new ExpressError(400, errMsg);
    }else{
      next();
    }
  };
  

  // Middleware to validate review data
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};



module.exports.isReviewAuthor = async (req, res, next) => {
  let {id, reviewId} = req.params;
  let review = await Review.findById(reviewId).populate('author'); // Assuming you have a Review model defined
  // Check if the user is authenticated
  if(!review.author.equals(res.locals.currentUser._id)){
      
      // If not, flash an error message and redirect to the login page
      req.flash('error', 'You are not authorized to do that!');
      return res.redirect(`/listings/${id}`); // Redirect to the listing's show page if user is not the owner
  }
  next();
}