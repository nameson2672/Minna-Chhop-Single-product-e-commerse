import mongoose from 'mongoose';
import User from './UserModel.js';

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: User,
    },
    orderQuantity: {
        type: Number,
        required: true,
    },
    shippingAdress: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    orderedAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    price: {
        type: Number,
        required: true,
    },
    paymentDetails: {
        type: String,
        required: false,
    },
    isPaid: {
        type: Boolean,
        required: false,
        default:false,
    },
    isDelivered: {
      type: Boolean,
      required: true,
        default: false,
    },
    deliveredAt: {
      type: Date,
    }
})

const Order = mongoose.model('Order', orderSchema);
export default Order;