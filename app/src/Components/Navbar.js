import React from 'react'
import { Link, Route, BrowserRouter as Router  } from 'react-router-dom';
import logo from '../pics/logo.png';

function Navbar() {
    return (
        <div className="z-50">
        <div className="container mx-auto flex justify-between items-center h-28 ">
            <div >
                <img src={logo} alt="logo" srcset="" className=" w-64 px-6" />
            </div>
            <div className=" text-textBlack font-normal text-sm font-display">
                <Router>
                    <ul className=" flex justify-between px-4">
                        <li className=" px-6 mx-1.5 ">
                            <Link to='/about'>SHOP</Link>
                        </li>
                        <li  className=" px-6 mx-1.5">
                            <Link to='/'>ABOUTUS</Link>
                        </li >
                        <li className=" px-6 mx-1.5">
                            <Link>CONTACT</Link>
                        </li>
                        <li className=" px-6 mx-1.5">
                            <Link>JOIN</Link>
                        </li>
                    </ul>
                </Router>
           </div>
            </div>
            <div className="container mx-auto h-0.5 bg-gray-600"></div>
    </div>
)
}

export default Navbar
