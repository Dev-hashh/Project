const Review = require('../models/review');
const Listing = require('../models/listing');

//Post Route

module.exports.postReview = async (req, res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.reviews);
    newReview.author = req.user._id; // Set the author to the current user
    listing.reviews.push(newReview);
    console.log(newReview);
    await newReview.save();
    await listing.save();
  
    req.flash('success', 'New review added successfully!');
    res.redirect(`/listings/${listing._id}`);
};


module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
      // Remove the review from the database
      // This is necessary to avoid orphaned reviews in the database
    await Review.findByIdAndDelete(reviewId);
      
    req.flash('success', 'Review deleted successfully!');
    res.redirect(`/listings/${id}`);
};