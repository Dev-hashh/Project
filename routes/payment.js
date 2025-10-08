// routes/paymentRoutes.js
const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payments"); 
const { isLoggedIn } = require("../middleware");

router.post("/create-checkout-session", paymentController.createCheckoutSession);
router.get("/success", isLoggedIn, paymentController.paymentSuccess);
router.get("/cancel", (req, res) => res.render("payment/cancel"));

module.exports = router;
