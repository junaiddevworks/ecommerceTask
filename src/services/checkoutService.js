const products = require('../models/productCatalogue');
const { calculateDiscountedPrice } = require('../utils/discountCalculator');

exports.calculateTotal = (items) => {
    let total = 0;
    const itemCounts = {};

    items.forEach((id) => {
        itemCounts[id] = (itemCounts[id] || 0) + 1;
    });

    Object.keys(itemCounts).forEach((id) => {
        const product = products.find((p) => p.id === id);
        if (product) {
            const count = itemCounts[id];
            const { price, discount } = product;

            total += calculateDiscountedPrice(count, price, discount);
        }
    });
    return total;
}