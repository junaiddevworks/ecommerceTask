const checkoutService = require('../services/checkoutService');

exports.checkout = (req, res, next) => {
    try {
      const items = req.body;
      if(!Array.isArray(items) || items.some((item) => typeof item !=='string')) {
        return res.status(400).json({message: 'Invalid input!'})
      }
  
      const totalPrice = checkoutService.calculateTotal(items);
      return res.status(200).json({ price: totalPrice });
    } catch (error) {
      next(error)
    }
  };