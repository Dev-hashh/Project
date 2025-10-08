// controllers/paymentControl
const Booking = require("../models/booking");
// const Listing = require("../models/listing.js");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports.createCheckoutSession = async (req, res) => {
  try {
    const { listingId, listingTitle, amount, checkin, checkout} = req.body;

    // Basic validation
    if (!listingTitle || !amount) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // ✅ Save booking info in session
    req.session.bookingData = {
      listingId,
      checkin,
      checkout,
      amount,
    };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: listingTitle,
            },
            unit_amount: amount * 100, // amount in paise
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/payment/success`,
      cancel_url: `${req.headers.origin}/payment/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ error: "Payment session creation failed" });
  }
};

// Store booking after successful payment
module.exports.paymentSuccess = async (req, res) => {
  try {
    // Retrieve booking info from session or DB
    const bookingData = req.session.bookingData;
    if (!req.session.bookingData || !req.user) {
      return res.redirect("/listings");
    }

    // Save booking to DB

    const newBooking = new Booking({
      listing: bookingData.listingId,
      user: req.user._id,
      checkin: bookingData.checkin,
      checkout: bookingData.checkout,
      totalPrice: bookingData.amount,
    });

    await newBooking.save();
    console.log("User:", req.user);
    console.log("Session bookingData:", req.session.bookingData);


    // Clear session data
    delete req.session.bookingData;

    res.render("payment/success", { booking: newBooking });
  } catch (error) {
    console.error("Error saving booking:", error);
    res.redirect("/payment/cancel");
  }
};