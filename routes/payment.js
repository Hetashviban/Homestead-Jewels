var express = require('express');
var router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Add this line to ensure stripe is required

/* POST payment route. */
router.post('/', function(req, res, next) {
  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken,
    name: 'Gautam Sharma',
    address: {
      line1: '23 Mountain Valley',
      postal_code: '110001',
      city: 'New Delhi',
      state: 'Delhi',
      country: 'India'
    }
  })
  .then((customer) => {
    return stripe.charges.create({
      amount: 7000,
      description: 'Web Dev',
      currency: 'usd',
      customer: customer.id
    });
  })
  .then((charge) => {
    res.send("Success!");
  })
  .catch((err) => {
    res.send(err.message);
  });
});

module.exports = router;