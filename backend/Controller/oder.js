import Order from '../models/OrderModel.js';
import User from '../models/UserModel.js';
import mailSender from "../Utils/mailSender.js";

// resistor user made by specific user
export const createOrder = async (req, res, next) => {
    const id = req.body._id;
    const user = await User.findById(id);

    if (user) {
        const orderItems = req.body.data;
        const order = await Order.create({ ...orderItems });
        const options = {
            email: user.email,
            subject: 'Sign in from device',
            html: `Hey, ${user.name} thank you for buying our chhop. Chhop will be deliver to you soon`
        }
        if (order) {
            mailSender(options);
        }
        res.status(200).json({
            sucess: true,
            data: "order",
        });

        next();
    }
    if (!user) {
        res.status(400).json({
            sucess: false,
            data: {},
            error: "User not found",
        })
    }
    
}

export const orderCheck = async (req, res, next) => {
    const id = req.body._id;
    const user = await User.findById(id);
    if (user) {
        const order = await Order.find({ user: user._id });
        res.status(200).json({
            sucess: true,
            data: order,
        })
        next();
    }
    res.status(400).json({
        sucess: false,
        data: {},
        error: "User not found",    
    })

}

export const showAllOrderToAdmin = async (req, res, next) => {
    const id = req.body._id;
    const user = await User.findById(id);
    if (user.admin === true) {
        const orders = await Order.find();
        res.status(200).json({
            sucess: true,
            data: orders
        })
        next()
    } else {
        res.status(401).json({
            sucess: false,
            data: {},
            error: 'you must be admin to update order'
        })
        next()
    }
    if (!user) {
        res.status(400).json({
            sucess: false,
            data: {},
            error: 'Login to hit this route',
        })
    }
}

export const updateOrderForAdmin = async (req, res, next) => {
    
    const id = req.body._id;
    const user = await User.findById(id);
    if (user.admin === true) {
        let order = await Order.findById(req.params.id);
        console.log(order);
        if (order) {
           
            order.isDelivered= true,
            order.deliveredAt= Date.now()
            
            const updatedOrder = await order.save();
            console.log(updatedOrder);
            res.status(200).json({
                sucess: true,
                data: updatedOrder,

            })
        }
        next();
    }
    if (user.admin !== true) {
        res.status(400).json({
            sucess: false,
            data: {},
            error: 'You must be admin to update order',
        })
    }
}

export const sendInfoForContact = async (req, res, next) => {
    const details = req.body.data;
    const options = {
            email: 'namesongaudel.ng@gmail.com',
            subject: 'Someone Want to contact you',
            html: `Hey, a man with email ${details.email} and phone no ${details.phone} send you message "${details.message}"`
        }
    mailSender(options);
    res.status(200).json({
        sucess: true,
        data: "We will contack you sortly"
    })  

}