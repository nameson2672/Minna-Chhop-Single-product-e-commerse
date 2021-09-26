import Stripe from "stripe";
import Order from "../models/OrderModel.js";
import User from "../models/UserModel.js";

export async function checkoutHandler(req, res) {
  if (req.method === "POST") {
    const product = req.body.product;
    const orderId = req.body.order.data.data;
    let order = await Order.findById(orderId);

    const id = req.body.uid;
    const user = await User.findById(id);
    const domain = "http://localhost:3000";
    if (user) {
      try {
        // Create checkout if there is order

        if (order) {
          const produsts = {
            name: "Minna Chhop",
            description:
              "A chhop for you and your family to be happy and healthy",
            images: ["https://i.ibb.co/g6bDJ8z/IMG-20210910-173929-02-848.jpg"],
            amount: 100,
            currency: "usd",
            quantity: order.orderQuantity,
          };
          // Create Checkout Sessions from body params.
          const session = await Stripe(
            process.env.STRIPE_SCRETE
          ).checkout.sessions.create({
            line_items: [produsts],
            payment_method_types: ["card"],
            mode: "payment",
            success_url: domain,
            cancel_url: domain,
          });

          order.paymentDetails = session.id;
          console.log(session.id);
          await order.save();

          res.status(200).json({
            sucess: true,
            data: { checkoutUrl: session },
          });
        }
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.status(405).end("Method Not Allowed");
    }
  } else {
    res.status(404).json({
      sucess: fales,
      data: {},
      error: "You must login to hit this route",
    });
  }
}
