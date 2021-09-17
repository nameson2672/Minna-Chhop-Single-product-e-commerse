import Stripe from 'stripe';
import Order from '../models/OrderModel.js';
import User from '../models/UserModel.js';
import mailSender from '../Utils/mailSender.js'
const webhookHandlers = {
    'checkout.session.completed': async (data) => {
    console.log(data);
    // Set order isPaid to true
    let order = await Order.findOne({ paymentDetails: data.id });
    const user = await User.findById(order.user);
    order.isPaid = true;

    //Sending mail to user about order completed
    const options = {
      email: user.email,
      subject: "Order completed.",
      html: 'Thank you for ordering we will deliver the chhop soon'
    }
    mailSender(options);
    
    await order.save();
  }
}


export const handleStripeWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const event = Stripe(process.env.STRIPE_SCRETE).webhooks.constructEvent(req['rawBody'], sig, process.env.STRIPE_WEBHOOK_SECRET);
  try {
    
    if (event.type === 'checkout.session.completed') {
      console.log(event.type);
      await webhookHandlers[event.type](event.data.object);
      res.send({ received: true });
    }
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
    }
}

