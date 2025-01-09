const Joi = require('joi');
const checkoutService = require('../services/checkoutService');


const checkoutSchema = Joi.array().items(Joi.string().length(3).required()).required();

exports.checkout = (req, res, next) => {
  try {
    
    const { error } = checkoutSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    //if passes validation
    const items = req.body;
    const totalPrice = checkoutService.calculateTotal(items);
    return res.status(200).json({ price: totalPrice });
  } catch (err) {
    next(err);
  }
};
