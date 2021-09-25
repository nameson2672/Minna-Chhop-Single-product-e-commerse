import logo from "../pics/logo.png";
import Counter from "./Counter";
import Details from "./Details";
import { useSpring, animated } from "react-spring";

import { useRef, useState} from 'react';

function ShopModel({ setModel, user }) {
  
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(1);
  const shopModelRef = useRef();

  const closeModel = (e) => {
      if (shopModelRef.current === e.target) {
        setModel(false);
      }
  };
  
    const animation = useSpring({
      from: {
        opacity: 0,
        transform: `translateY(-100%)`,
      },
      to: {
        opacity: 1,
        transform: `translateY(10%)`,
      },
      config: { duration: 300 },
    });
  
  return (
    <div
      ref={shopModelRef}
      onClick={closeModel}
      className="fixed w-full h-full grid place-content-center z-50 top-0 right-0 backdrop-filter backdrop-blur-lg backdrop-brightness-50 overflow-auto"
    >
      <animated.div style={animation}>
        <div className="sm:mx-auto  sm:max-w-8xl bg-cardBg my-5 rounded sm:py-7 sm:m-2 ">
          <div className="grid place-content-center">
            <img
              src={logo}
              alt="logo minna choop"
              className="sm:w-80 sm:mt-6 w-32 "
            />
          </div>
          <div className="h-0.5 bg-textGreen mb-3 mx-10"></div>
          <div className="grid sm:place-content-around place-content-center grid-flow-row sm:mx-16 sm:grid-flow-col sm:py-7">
            <Counter
              quantity={quantity}
              setQuantity={setQuantity}
              price={price}
              setPrice={setPrice}
            />
            <div className=" sm:col-span-3 sm:ml-8">
              <Details user={user} price={price} quantity={quantity} />
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default ShopModel;
