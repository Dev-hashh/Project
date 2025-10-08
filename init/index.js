require('dotenv').config({ path: '../.env' });

const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');
const User = require('../models/user.js'); // import your User model

// MongoDB connection URL from environment variables
const dbUrl = process.env.ATLASDB_URL;


if (!dbUrl) {
    console.warn("⚠️ Warning: ATLASDB_URL not found in .env. Using local DB.");
}

// Function to connect to MongoDB
const connectDB = async () => {
    const connectionUrl =  dbUrl; // Use Atlas if available, else local
    try {
        await mongoose.connect(connectionUrl, { connectTimeoutMS: 30000 });
        console.log(`✅ Connected to MongoDB: ${connectionUrl === dbUrlLocal ? 'Local' : 'Atlas'}`);
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    }
};

// Function to seed the database
const initDB = async () => {
    try {
        // Clear existing listings
        console.log("🗑️ Clearing existing listings...");
        await Listing.deleteMany({});
        
        // 1. Fetch all existing users
        const users = await User.find({});
        
        // 2. Critical Check: Ensure users exist before proceeding
        if (users.length === 0) {
            console.error("❌ ERROR: No users found in the database. Please register a user first.");
            console.error("Listings cannot be created without valid owners. Exiting seed process.");
            return; 
        }

        // Add owner field to each item dynamically
        console.log(`📦 Preparing initial data for ${initData.data.length} listings with dynamic owners...`);

        const listingsWithOwner = initData.data.map((obj) => {
            // Select a random user from the list
            const randomUser = users[Math.floor(Math.random() * users.length)];
            return {
                ...obj,
                // Assign the Mongoose ObjectId of the user
                owner: randomUser._id, 
                geometry: obj.geometry
            };
        });
        
        // 3. Insert the corrected data (only once)
        await Listing.insertMany(listingsWithOwner);

        console.log("🌱 Database seeded with initial data and valid owners.");

    } catch (error) {
        console.error("❌ Error seeding database:", error);
    } finally {
        try{
            await mongoose.connection.close();
            console.log("🔌 MongoDB connection closed");
            process.exit(0);
        }catch(err){
            console.error("❌ Error closing MongoDB connection:", err);
            process.exit(1);
        }
    }
};

const runSeeder = async () => {
    await connectDB();
    await initDB();
};

runSeeder();


