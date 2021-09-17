import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useState } from 'react';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
  
export default function CheckoutComponent() {

  const [sessionId, setSessionId] = useState();
  const [product, setProduct] = useState({
    name: 'Minna Chhop',
    description: 'A chhop for you and your family to be happy and healthy',
    images: [
      'https://i.ibb.co/g6bDJ8z/IMG-20210910-173929-02-848.jpg',
    ],
    amount: 100,
    currency: 'usd',
    quantity: 0,
  });

  const changeQuantity = (v) =>
    setProduct({ ...product, quantity: Math.max(0, product.quantity + v) });

  const handleClick = async (event) => {
    const stripe = await loadStripe(
    "pk_test_51JY6mgBCGK9w7fWO0rZyM9IhQoQZvoJmmpXzNfdUxBtwtKEkIhx1eYYOgdcjgGUro4m05gzXwAFHwfcALlI4p7Vw00460O6klJ"
  );
    
    const body = { line_items: [product] }
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const data =  await axios({
      method: 'post',
      url: 'http://localhost:4000/checkout',
      crossDomain : true,
      data: product
            })
    
    // ;


    // console.log(data.data.data.checkoutUrl.id)
    const { error } = await stripe.redirectToCheckout({ sessionId: data.data.data.checkoutUrl.id })

     
    

    
  };
  return (
    <div>

      <div className="product">
        <h3>{product.name}</h3>
        <h4>Stripe Amount: {product.amount}</h4>

        <img src={product.images[0]} width="250px" alt="product" />

        <button
          className="btn btn-sm btn-warning"
          onClick={() => changeQuantity(-1)}>
          -
        </button>
        <span style={{ margin: '20px', fontSize: '2em' }}>
          {product.quantity}
        </span>
        <button
          className="btn btn-sm btn-success"
          onClick={() => changeQuantity(1)}>
          +
        </button>
      </div>

      <hr />

      <button
        className="btn btn-primary"
        onClick={handleClick}
        disabled={product.quantity < 1}>
        Start Checkout
      </button>
    </div>
  );
}