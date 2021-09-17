import Stripe from 'stripe';
import Order from '../models/OrderModel.js';
import User from '../models/UserModel.js';

export  async function checkoutHandler(req, res) {
  if (req.method === 'POST') {
    const product = req.body.product;
    const id = req.body.uid;
    console.log(req.body);
    const user = await User.findById(id);
    console.log(user);
      
    const domain = 'http://localhost:3000'
    if (user) {
      try {
        // Create checkout if there is order
        let order = await Order.findOne({ user: id });
        if (order) {
          // Create Checkout Sessions from body params.
          const session = await Stripe(process.env.STRIPE_SCRETE).checkout.sessions.create({
            line_items: [
              product,
            ],
            payment_method_types: [
              'card',
            ],
            mode: 'payment',
            success_url: domain,
            cancel_url: domain,
          });
          console.log(session.id);
        
          order.paymentDetails = session.id;
          
          await order.save();
            
          res.status(200).json({
            sucess: true,
            data: { checkoutUrl: session }
          });
        }

      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.status(405).end('Method Not Allowed');
    }
  } else {
    res.status(404).json({
      sucess: fales,
      data: {},
      error: "You must login to hit this route"
    })
  }

}