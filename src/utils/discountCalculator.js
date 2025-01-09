
const calculateDiscountedPrice = (count, unitPrice, discount) => {
    if(!discount) {
        return count * unitPrice;
    }

    const { quantity, price: discountPrice } = discount;
    const discountedSets = Math.floor(count / quantity);
    const remainingItems = count % quantity;

    return discountedSets * discountPrice + remainingItems * unitPrice;
};

module.exports = { calculateDiscountedPrice };