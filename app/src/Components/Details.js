import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

function Details({ user, price, quantity }) {
  const domain = "http://localhost:3000";
  const [phone, setPhone] = useState(null);
  const [details, setDetails] = useState(null);
  const [sessionId, setSessionId] = useState();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    name: "Minna Chhop",
    description: "A chhop for you and your family to be happy and healthy",
    images: ["https://i.ibb.co/g6bDJ8z/IMG-20210910-173929-02-848.jpg"],
    amount: 100,
    currency: "usd",
    quantity: quantity,
  });

  const handleClick = async (event) => {
    setLoading(true);
    const stripe = await loadStripe(
      "pk_test_51JY6mgBCGK9w7fWO0rZyM9IhQoQZvoJmmpXzNfdUxBtwtKEkIhx1eYYOgdcjgGUro4m05gzXwAFHwfcALlI4p7Vw00460O6klJ"
    );
    const uid = window.localStorage.getItem("uid")
    
    const body = { line_items: [product] };
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    if (phone && details) {
      if (uid) {
        const createOrder = await axios({
          method: "POST",
          url: `${domain}/order`,
          data: {
            _id: uid, data: {
              user: uid,
              orderQuantity: quantity,
              shippingAdress: details,
              price: price * 100,
            }
          },
        });
        if (createOrder) {
          const data = await axios({
            method: "post",
            url: `${domain}/checkout`,
            crossDomain: true,
            data: { uid: uid, product },
          });
    

          const { error } = await stripe.redirectToCheckout({
            sessionId: data.data.data.checkoutUrl.id,
          });
          if (error) {
            setLoading(false);
          }
        }
      }
    } else {
      console.log("running")
      setLoading(false);
      
    }
  };

  const setWithDebounce = useCallback(
    debounce((e, set) => {
      set(e.target.value);
    }, 500),
    []
  );

  return (
    <div className="col-span-3 bg-shopLight sm:p-9 sm:px-8 rounded-t rounded-b  flex justify-center items-center flex-col text-center p-2 m-2 sm:m-0">
      {user && (
        <div className="flex  justify-center items-center flex-col text-center sm:w-60">
          <img src={user.imageUrl} alt="User image" className="rounded-full w-9" />
          <p className="text-xl">{user.name}</p>
        </div>
      )}
      <div className="h-0.5 bg-textGreen sm:w-full mb-2"></div>
      <div className="text-left">
        <div className="mt-4">
          <p className="text-base text-titleDark">Phone Number</p>
          <input
            type="text"
            name="Phone number"
            className="border-none outline-none px-3 sm:w-64 sm:py-2  rounded-sm"
            onChange={(e) => setWithDebounce(e, setPhone)}
          />
        </div>
        <div className="mt-4">
          <p className="text-base text-titleDark">Adress Details</p>
          <textarea
            type="text"
            name="Infroramtion"
            className="border-none outline-none px-3 sm:w-96 sm:h-24 sm:overflow-hidden py-2  rounded-sm "
            onChange={(e) => setWithDebounce(e, setDetails)}
          />
        </div>

        <button
          className="bg-textGreen text-white hover:bg-btnBlue text-xl sm:px-28 py-2 sm:my-4 rounded-lg h-14 px-14 "
          disabled={loading}
          onClick={handleClick}
        >
          {" "}
          {loading ? (
            <div className="spinner animate-spin"></div>
          ) : (
            <p>Checkout</p>
          )}
        </button>
      </div>
    </div>
  );
}

export default Details;
