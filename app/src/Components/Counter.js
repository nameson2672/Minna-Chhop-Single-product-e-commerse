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
      <div className="sm:col-span-2 p-2 sm:p-0">
        <div className="rounded-md">
          <div className="bg-textGreen rounded-t ">
            <img src={product} alt="Chhop minna sharma" className="sm:w-64 w-32 sm:p-3" />
          </div>
          <div className="bg-shopLight rounded-b-md sm:px-5 py-2">
            <div className="sm:px-2 grid place-content-center text-center w-40 "> 
              <p className="text-xl pb-3">Homade Chhop</p>
              <div className="bg-shopDark  flex justify-between sm:items-center rounded-lg  sm:px-3 sm:py-2 sm:w-48 ">
                <img
                  onClick={decrement}                  
                  src={minus}
                  alt="minus btn"
                  className="cursor-pointer w-7"
                                
                />
                <p className="sm:mx-10 mx-5  text-xl">{quantity}</p>
                <img src={add} alt="add btn" className="cursor-pointer w-7" onClick={increment} />
              </div>
            </div>

            <div className="w-40 p-2 sm:p-0 sm:w-52"> 
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
