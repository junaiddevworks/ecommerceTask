const products = require('../models/productCatalogue');

exports.calculateTotal = (items) => {
    let total = 0;

    items.forEach((id) => {
        const product = products.find((p) => p.id === id);
        if(product) {
            total += product.price;
        }
    });
    return total
}