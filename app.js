require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js'); // Import the User model


const listingRouter = require('./routes/listing.js'); // Import the listings routes
const reviewRouter = require('./routes/review.js'); // Import the reviews 
const userRouter = require('./routes/user.js'); // Import the user routes
const searchRouter  = require('./routes/search');
const bookingRouter  = require('./routes/booking');
const paymentRouter  = require('./routes/payment');

const app = express();

// Middleware setup
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));



const dbUrl = process.env.ATLASDB_URL ;
main()
  .then(() => console.log('Database connection established'))
  .catch((err) => {
    console.error('Database connection error:', err);
    process.exit(1);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600, // time period in seconds after which the session will be updated
})

store.on('error', ()=>{
  console.log('Session store error');
  console.log('MongoStore error:', err);
})
const sessionOptions={
  store: store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24, // 1 day
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true, // Helps prevent XSS attacks
  }
};




// Middleware for session and flash messages
app.use(
  session({
    secret: "wcsdfghxjnmsdxnlkmsnx",
    resave: false,
    saveUninitialized: true,
    
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); // Use local strategy for authentication
passport.serializeUser(User.serializeUser());         // Store user related info in the session
passport.deserializeUser(User.deserializeUser());     // Unstore user related info from the session oncd the user logs out or session is finished

app.use((req, res, next) => {
  res.locals.success = req.flash('success'); // For success messages
  res.locals.error = req.flash('error');      // For error messages  
  res.locals.currentUser = req.user;         // For current user info
  console.log(res.locals.success); 
  next();
});  


app.get('/', (req, res) => {
  res.render('listings/home.ejs'); // Render the index page
});



// Routes setup
app.use('/listings', listingRouter); // Use the listings routes
app.use('/listings/:id/reviews', reviewRouter); // Use the reviews routes
app.use('/', userRouter); // Use the user routes
app.use('/search', searchRouter); // Use the search routes
app.use('/listings/:id/booking', bookingRouter); // Use the booking routes
app.use('/payment', paymentRouter); // Use the payment routes



// Catch-all for unmatched routes
app.all('*', (req, res, next) => {
  next(new ExpressError(404, "Page not found..."));

});

// // Central error handler
app.use((err, req, res, next) => {
  console.error('🔥 ERROR CAUGHT:', err.stack || err);
  let { statusCode = 500, message = 'Something went wrong' } = err;
  //res.status(statusCode).send(message);
  res.status(statusCode).render('error.ejs', { message });
});



// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



