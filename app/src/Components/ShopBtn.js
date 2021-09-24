import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

function ShopBtn({ setModel }) {
  console.log("hey");
  return (
    <div className=" sm:w-60 h-22 rounded-3xl  bg-btnBlue  sm:text-2xl text-footerText flex justify-center items-center sm:mt-10 hover:bg-btnBlueHover  transition-colors" onClick={()=>setModel(true)}>
      <Router>
        <Link to="/" className="py-2">
          Shop now
        </Link>
      </Router>
    </div>
  );
}
export default ShopBtn
