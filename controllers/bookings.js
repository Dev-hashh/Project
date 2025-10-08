const Listing = require('../models/listing.js');
const Booking = require('../models/booking.js');

//GET
module.exports.index = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash('error', 'Listing does not exist!');
      return res.redirect('/listings'); // Redirect to listings index if listing not found
    }
    res.render('listings/booking', { listing });
};