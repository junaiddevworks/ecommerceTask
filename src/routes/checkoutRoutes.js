const express = require('express');
const router = express.Router();

router.post('/checkout', (req, res) => {
    res.status(200).json({message: 'Checkout route working!'});
});

module.exports = router;