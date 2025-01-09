const express = require('express');
const router = express.Router();
const chechoutService = require('../services/checkoutService');

router.post('/checkout', (req, res) => {
    const items = req.body;
    const total = chechoutService.calculateTotal(items);
    res.status(200).json({price: total});
});

module.exports = router;