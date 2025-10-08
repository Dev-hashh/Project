
// public/js/booking.js
document.addEventListener("DOMContentLoaded", () => {
  // These values are injected from the EJS file using a <script> tag
  const { listingId, listingTitle, pricePerNight, stripePublicKey } = window.bookingData;

  const stripe = Stripe(stripePublicKey);
  let totalAmount = 0;

  // --- Update total price ---
  function updateTotalPrice() {
    const inDate = new Date(document.getElementById("checkin").value);
    const outDate = new Date(document.getElementById("checkout").value);

    if (!isNaN(inDate) && !isNaN(outDate) && outDate > inDate) {
      const days = (outDate - inDate) / (1000 * 60 * 60 * 24);
      totalAmount = days * pricePerNight;
      document.getElementById("totalPrice").innerText =
        "₹" + totalAmount.toLocaleString("en-IN");
    } else {
      totalAmount = 0;
      document.getElementById("totalPrice").innerText = "₹0";
    }
  }

  // --- Flatpickr setup ---
  const checkoutPicker = flatpickr("#checkout", {
    dateFormat: "Y-m-d",
    minDate: "today",
    onChange: updateTotalPrice,
  });

  const checkinPicker = flatpickr("#checkin", {
    dateFormat: "Y-m-d",
    minDate: "today",
    onChange: (_, dateStr) => {
      checkoutPicker.set("minDate", dateStr);
      updateTotalPrice();
    },
  });

  // --- Stripe Payment Logic ---
  document.getElementById("paymentForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    if (totalAmount <= 0) {
      alert("Please select valid check-in and check-out dates.");
      return;
    }

    const response = await fetch("/payment/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        listingId ,
        listingTitle,
        amount: totalAmount,
        checkin: document.getElementById("checkin").value,
        checkout: document.getElementById("checkout").value,
      }),
    });

    const data = await response.json();
    if (data.url) {
      window.location = data.url;
    } else {
      alert("Payment session failed!");
    }
  });
});
