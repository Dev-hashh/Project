// routes/search.js
const express = require('express');
const router = express.Router();
const Listing = require('../models/listing');

router.get('/', async (req, res) => {
  const query = req.query.q;
  console.log("Search query:", query);
  try {
    const listings = await Listing.find({
      $or: [
        { title:   { $regex: query, $options: 'i' } },
        { location:{ $regex: query, $options: 'i' } }
      ]
    });
    res.render('listings/searchResults', { listings, query });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong.");
  }
});

module.exports = router;
