import logo from "../pics/logo.png";
import Counter from "./Counter";
import Details from "./Details";

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
  return (
    <div
      ref={shopModelRef}
      onClick={closeModel}
      className="fixed w-full h-full grid place-content-center z-50 top-0 backdrop-filter backdrop-blur-lg backdrop-brightness-50 "
    >
      <div className="mx-auto absolute max-w-8xl bg-cardBg  mt-20 rounded py-7">
        <div className="grid place-content-center">
          <img src={logo} alt="logo minna choop" className="w-80 mt-6" />
        </div>
        <div className="h-0.5 bg-textGreen mb-3 mx-10"></div>
        <div className="grid place-content-around mx-16 grid-flow-col py-7">
          <Counter
            quantity={quantity}
            setQuantity={setQuantity}
            price={price}
            setPrice={setPrice}
          />
          <div className="col-span-3 ml-8">
            <Details user={user} price={price} quantity={quantity} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopModel;
