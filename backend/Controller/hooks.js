import Stripe from 'stripe';
const webhookHandlers = {
    'checkout.session.completed': async (data) => {
        // Add your logic here
      
  },
  'payment_intent.succeeded': async (data) => {
      // Add your logic here
   
  },
  'payment_intent.failed': async (data) => {
    // Add your logic here
  }
}


export const handleStripeWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const event = Stripe(process.env.STRIPE_SCRETE).webhooks.constructEvent(req['rawBody'], sig, process.env.STRIPE_WEBHOOK_SECRET);
  try {
    console.log(event.type);
      await webhookHandlers[event.type](event.data.object);
      res.send({received: true});
    } catch (err) {
      console.error(err)
      res.status(400).send(`Webhook Error: ${err.message}`);
    }
}

