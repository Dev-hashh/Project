const mongoose = require('mongoose');
const Review = require('./review.js'); // Assuming you have a Review model defined in review.js
const Schema = mongoose.Schema;


const listingSchema = new Schema({

    title: {    
        type: String,
        //required: true,
        
    },

    description: {
        type: String,
        //required: true,
        
    },

    images: {
        url: String,
        filename: String,
    },

    price: {
        type: Number,
        //required: true,
        min: 0
    },

    location: {
        type: String,
        //required: true,
        
    },
    
    country: {
        type: String,
        //required: true,
        
    },
    
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true
        }
    },

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        
    },
});
// Middleware to delete reviews when a listing is deleted
listingSchema.post('findOneAndDelete', async (listing)=>{
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});
const Listing = mongoose.model('Listing', listingSchema);   
module.exports = Listing;