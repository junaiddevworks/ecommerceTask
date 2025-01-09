const products = require('../models/productCatalogue');


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

            if (discount) {
                const { quantity, price: discountPrice } = discount;
                const discountedSets = Math.floor(count/ quantity);
                const remainingItems = count % quantity;

                total += discountedSets * discountPrice + remainingItems * price;
            }
            else {
                total += count * price;
            }
        }
    });
    return total;
}