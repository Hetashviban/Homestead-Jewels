var express = require('express');
var router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Ensure stripe is required

/* POST payment route. */
router.post('/', function(req, res, next) {
  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken,
    name: 'Homestead Jewels',
    address: {
      line1: '1 Georgian Dr',
      postal_code: 'L4M 3X9',
      city: 'Barrie',
      state: 'Ontario',
      country: 'Canada'
    }
  })
  .then((customer) => {
    return stripe.charges.create({
      amount: 7000,
      description: 'Web Dev',
      currency: 'cad',
      customer: customer.id
    });
  })
  .then((charge) => {
    res.render('payment', { title: 'Payment Success' });
  })
  .catch((err) => {
    res.send(err.message);
  });
});

module.exports = router;