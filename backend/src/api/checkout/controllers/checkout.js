'use strict';

const stripe = require('stripe')(process.env.STRIPE_SECRET || 'sk_test_yourkey');

module.exports = {
  async create(ctx) {
    const { amount } = ctx.request.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: { name: 'Commande Kebab' },
            unit_amount: amount || 1000,
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost/confirmation',
      cancel_url: 'http://localhost/panier',
    });

    return { url: session.url };
  },
};
