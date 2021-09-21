import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

function ShopBtn() {
    console.log("hey")
    return (
        <div className=" w-60 rounded-3xl  bg-btnBlue  text-2xl text-footerText flex justify-center items-center mt-10 hover:bg-btnBlueHover  transition-colors">
            <Router>
                <Link to="/" className="py-2">Shop now</Link>
           </Router>
        </div>
    )
}
export default ShopBtn
