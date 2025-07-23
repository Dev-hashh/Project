const express = require('express');
const router = express.Router({mergeParams: true}); // Use mergeParams to access params from the parent route

const Listing  = require('../models/listing');
const wrapAsync = require('../utils/wrapAsync');
//const ExpressError = require('../utils/ExpressError');
//const { listingSchema} = require('../schema.js');
const { isLoggedIn, saveRedirectUrl, isOwner, validateListing } = require('../middleware.js');
const listingController = require('../controllers/listings.js');

const multer  = require('multer');
const { storage } = require('../cloudConfig.js'); // Import the storage configuration from cloudinary.js
const upload = multer({ storage });

// //search route
// router.get('/search', async (req, res) => {
//     const query = req.query.q;
//     console.log("Search query:", query);
//     try {
//         const listings = await Listing.find({
//             $or: [
//                 { title: { $regex: query, $options: 'i' } },
//                 { location: { $regex: query, $options: 'i' } }
//             ]
//         });
//         res.render('listings/searchResults', { listings, query });
//     } catch (err) {
//         console.error(err);
//         res.redirect('/');
//     }
// });


router.route('/')
  .get(wrapAsync(listingController.index)) // Use the index method from the listingController       --> INDEX ROUTE
  .post(isLoggedIn, upload.single('listing[images]'), validateListing, wrapAsync(listingController.createNewListing)); // Use the createNewListing method from the listingController      --> CREATE ROUTE
  // .post(upload.single('listing[images]'), (req, res) => {
  //   //console.log("req.file", "...", req.file);
  //   console.log("req.body", "...", req.body);
  //   res.send(req.file);
  // }); // Use the upload middleware to handle file uploads, then send the file info back as a response
  


// NEW - show form to create a new listing
router.get('/new', isLoggedIn, listingController.newListingForm); // Use the newListingForm method from the listingController);


// // INDEX - show all listings
//router.get('/', wrapAsync(listingController.index)); // Use the index method from the listingController

// // CREATE - add new listing to DB
//router.post('/', isLoggedIn, validateListing, wrapAsync(listingController.createNewListing)); // Use the createNewListing method from the listingController);


router.route('/:id')
  .get(wrapAsync(listingController.showListing))
  .put(isLoggedIn, isOwner, upload.single("listing[images]"), validateListing, wrapAsync(listingController.updateListingForm)) // Use the updateListingForm method from the listingController
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing)); // Use the deleteListing method from the listingController
 
// // SHOW - show info about one listing
// router.get('/:id', wrapAsync(listingController.showListing)); // Use the showListing method from the listingController);
// // UPDATE - update a listing
// router.put('/:id', isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListingForm));
// // DELETE - delete a listing
// router.delete('/:id', isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));


router.route('/:id/edit')
  .get(isLoggedIn, isOwner, listingController.editListingForm) ;// Use the editListingForm method from the listingController
  


// EDIT - show form to edit a listing

//router.get('/:id/edit', isLoggedIn, isOwner, wrapAsync(listingController.editListingForm)); // Use the editListingForm method from the listingController


module.exports = router;
