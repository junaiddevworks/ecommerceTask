const request = require('supertest');
const app = require('../../server');

afterAll(() => {
    app.close?.();
  });

describe('Checkout Controller', () => {
  test('returns the total price for valid input', async () => {
    const response = await request(app)
      .post('/checkout')
      .send(['001', '002', '001', '004', '003'])
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ price: 360 });
  });

  test('returns 400 for invalid product IDs', async () => {
    const response = await request(app)
      .post('/checkout')
      .send(['001', 'XYZ', '004'])
      .set('Accept', 'application/json');

    expect(response.status).toBe(400);
    expect(response.body.message).toContain('"XYZ" fails to match the required pattern');
  });
});
