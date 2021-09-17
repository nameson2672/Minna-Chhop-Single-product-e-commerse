// Import express and setup
import express from 'express'
const router = express.Router()

// Import controller to controle different route
import { createUser } from '../Controller/auth.js'
import { createOrder, orderCheck, showAllOrderToAdmin, updateOrderForAdmin } from '../Controller/oder.js';
import {checkoutHandler} from "../Controller/checkout.js"
import { handleStripeWebhook } from '../Controller/hooks.js';


router.route('/login').post(createUser);
router.route('/order').post(createOrder);
router.route('/admin').get(showAllOrderToAdmin);
router.route('/admin/:id').post(updateOrderForAdmin);
router.route('/checkout').post(checkoutHandler);
router.route('/hooks').post(handleStripeWebhook);
export default router;