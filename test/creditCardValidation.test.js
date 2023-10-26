const chai = require('chai');
const supertest = require('supertest');
const app = require('../app')
const expect = chai.expect;
const request = supertest(app);

describe('Credit Card Validation API', () => {
  it('should validate a valid credit card number', async () => {
    const response = await request
      .post('/api/validate-credit-card')
      .send({ creditCardNumber: '4111111111111111' });

    expect(response.status).to.equal(200);
    expect(response.body.result).to.equal(true);
  });

  it('should reject an invalid credit card number', async () => {
    const response = await request
      .post('/api/validate-credit-card')
      .send({ creditCardNumber: '1234567890123456' });

    expect(response.status).to.equal(200);
    expect(response.body.result).to.equal(false);
  });
});
