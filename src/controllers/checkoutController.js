const checkoutService = require('../services/checkoutService');

exports.checkout = (req, res) => {
    try {
      const items = req.body;
  
      const totalPrice = checkoutService.calculateTotal(items);
      return res.status(200).json({ price: totalPrice });
    } catch (error) {
      console.log(error)
    }
  };