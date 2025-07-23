require('dotenv').config({ path: '../.env' });

const mongoose = require('mongoose');
const initData= require('./data.js');
const Listing = require('../models/listing.js');

const dbUrl = process.env.ATLASDB_URL ;

if (!dbUrl) {
    console.error("❌ Error: ATLASDB_URL not found in .env");
    process.exit(1);
}


// main()
// .then(() => {
//     console.log("Connected to MongoDB");
    
// })
// .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
// });

// async function main(){
//     await mongoose.connect(dbUrl);
// }

// const initDB = async () => {
//     try {
        
//         // Clear existing listings
//         await Listing.deleteMany({});

//         initData.data = initData.data.map((obj)=>({...obj, owner: "6864015c08546a54e575e9d1"}));   // Assuming you have a user with this ID to set as owner
//         // Insert initial data
//         await Listing.insertMany(initData.data);

//         console.log("Database initialized with sample data");
//     } catch (error) {
//         console.error("Error initializing database:", error);
//     } 
// }

// initDB();

// Connect to MongoDB Atlas
const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, { connectTimeoutMS: 30000 });
        console.log("✅ Connected to MongoDB Atlas");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    }
};

// Seed the database
const initDB = async () => {
    try {
        // Clear existing listings
        console.log("🗑️ Clearing existing listings...");
        await Listing.deleteMany({});
        

        // Add owner field to each item
        console.log("📦 Preparing initial data...");
        initData.data = initData.data.map((obj) => ({
            ...obj,
            owner: "687fd1c8eb12b82e29bdfbdf", // Replace with actual user ID if needed
            geometry: obj.geometry
        }));

        // Insert new data
        await Listing.insertMany(initData.data);
        console.log("🌱 Database seeded with initial data");

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

// (203.81.242.187/32) 