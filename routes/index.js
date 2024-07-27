var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('Stripe Publishable Key:', process.env.STRIPE_PUBLISHABLE_KEY);
    res.render('index', {
        title: 'Express',
        key: process.env.STRIPE_PUBLISHABLE_KEY,
    });
});

module.exports = router;