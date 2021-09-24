import React, {useState}  from 'react'
import product from "../pics/product.png";
import add from "../pics/add.png";
import minus from "../pics/minus.png";

function Counter({quantity, setQuantity, price, setPrice}) {
    const increment = () => {
        if (quantity >= 0) {
            setQuantity(quantity + 1);
            setPrice(1 + quantity);
        }
    }
    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            setPrice(quantity - 1);
        }
    }
    return (
      <div className="col-span-2 ">
        <div className="rounded-md">
          <div className="bg-textGreen rounded-t  ">
            <img src={product} alt="Chhop minna sharma" className="w-64 p-3" />
          </div>
          <div className="bg-shopLight rounded-b-md px-5 py-2">
            <div className="px-2 grid place-content-center text-center ">
              <p className="text-xl pb-3">Homade Chhop</p>
              <div className="bg-shopDark  flex justify-between rounded-lg  px-3 py-2">
                <img
                  onClick={decrement}                  
                  src={minus}
                  alt="minus btn"
                  className="cursor-pointer w-7"
                                
                />
                <p className="mx-10 text-xl">{quantity}</p>
                <img src={add} alt="add btn" className="cursor-pointer w-7" onClick={increment} />
              </div>
            </div>

            <div className="">
              <div className="flex justify-between items-center my-2">
                <p>Per product</p>
                <p>$ 1.00</p>
              </div>
              <div className="flex justify-between items-center my-2">
                <p>Quantity</p>
                <p>{quantity}</p>
              </div>
              <div className="h-0.5 bg-textGreen w-full mb-2"></div>
              <div className="flex justify-between items-center">
                <p>Total</p>
                <p className="text-textBlack text-xl">$ {price}.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Counter
