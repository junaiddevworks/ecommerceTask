const checkoutService = require('../../src/services/checkoutService');

describe('Checkout Service', () => {
    test('calculates total price without discounts', () => {
        const items = [ '003', '004' ];
        const result = checkoutService.calculateTotal(items);
        expect(result).toBe(80);
    });

    test('applies discount correctly', () => {
        const items = ['001', '001', '001'];
        const result = checkoutService.calculateTotal(items);
        expect(result).toBe(200);
    });

    test('handle mix items with and without discount', () => {
        const items = ['001', '002', '001', '003', '004'];
        const result = checkoutService.calculateTotal(items);
        expect(result).toBe(360)
    });
});
