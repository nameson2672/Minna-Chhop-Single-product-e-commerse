import Stripe from 'stripe';

export  async function checkoutHandler(req, res) {
    if (req.method === 'POST') {
      const product = req.body;
      console.log(product);
      
      const domain ='http://localhost:3000'

    try {
      // Create Checkout Sessions from body params.
      const session = await Stripe(process.env.STRIPE_SCRETE).paymentIntents.create({
        // line_items: [
        //   product,
        // ],
        // payment_method_types: [
        //   'card',
        // ],
        // mode: 'payment',
        // success_url: domain,
        // cancel_url: domain,
        amount: 200,
        currency: 'usd'
      });
      console.log(session.url);
      // res.redirect(303, session.url);
      res.status(200).json({
        sucess: true,
        data:{ checkoutUrl: session }
      });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.status(405).end('Method Not Allowed');
  }
}