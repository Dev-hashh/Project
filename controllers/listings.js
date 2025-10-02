const Listing = require('../models/listing');
const geocodeLocation = require('../utils/geocoding');

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render('listings/index', { allListings });
};

module.exports.newListingForm = (req, res) => {
    //console.log(req.user);
    res.render('listings/new');
};

module.exports.createNewListing = async (req, res) => {
  try {
      const { location } = req.body.listing; // Extract location
      console.log("location:", location);

      const geoData = await geocodeLocation(location);
      console.log("GeoData received:", geoData);
      if (!geoData) {
          req.flash('error', 'Could not geocode location');
          return res.redirect('/listings/new');
      }

      // Create listing with geometry
      const newListing = new Listing({
          ...req.body.listing,
          owner: req.user._id, // Set owner
          geometry: {
              type: 'Point',
              coordinates: [geoData.longitude, geoData.latitude]
          }
      });


      // Add image if uploaded
      if (req.file) {
          console.log("req.file:", req.file);
          newListing.images = {
              url: req.file.path,
              filename: req.file.filename
          };
      } else {
          // Optional: Set a default image
          newListing.images = {
              url: 'https://res.cloudinary.com/dhziyoy0v/image/upload/v1752169475/download_iuhdkm.png', // Example placeholder
              filename: 'default-placeholder'
          };
      }

      await newListing.save();
      req.flash('success', 'Successfully created a new listing!');
      res.redirect(`/listings/${newListing._id}`);
  } catch (err) {
      console.error(err);
      req.flash('error', 'Something went wrong while creating the listing.');
      res.redirect('/listings/new');
  }
};


module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id).populate("owner").populate({path: "reviews", populate: {path: "author",},}); // Populate reviews and owner for the listing
  if (!listing) {
    req.flash('error', 'Listing does not exist!');
    return res.redirect('/listings'); // Redirect to listings index if listing not found
  }
  console.log(listing);
  res.render('listings/show', { listing });
};


module.exports.editListingForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash('error', 'Listing does not exist!');
      return res.redirect('/listings'); // Redirect to listings index if listing not found
    }

    let originalImgUrl = listing.images.url; // Store the original image URL
    originalImgUrl = originalImgUrl.replace('/upload', '/upload/w_250')
    
    res.render('listings/edit', { listing, originalImgUrl }); // Render the edit form with the listing
};

module.exports.updateListingForm = async (req, res) => {
  console.log("Update listing form called");
  console.log("req.body", "...", req.body.listing);
  
  let { id } = req.params;
  
  let updatedListing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  // let url = req.file.path;
  // console.log("url", "...", url);
  // let filename = req.file.filename;
  // console.log("filename", "...", filename);

  // Check if user uploaded a new image
  if(typeof req.file !== 'undefined' && req.file !== null) {
    let url = req.file.path;
    console.log("url", "...", url);
    let filename = req.file.filename;
    console.log("filename", "...", filename);

    console.log("req.file", "..." , req.file);
    updatedListing.images = { url, filename }; // Update the images field with the new image
  await updatedListing.save(); // Save the updated listing with the new image
    
  }

  
  
  
  req.flash('success', 'Successfully updated the listing!');
  res.redirect(`/listings/${id}`); // Use template literal to redirect to the updated listing's show page
}


module.exports.deleteListing = async (req, res) => {
  
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  console.log(Listing.findByIdAndDelete(id));
  req.flash('success', 'Successfully deleted the listing!');
  res.redirect('/listings');
}