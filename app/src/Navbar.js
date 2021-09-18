import React from 'react'
import logo from './pics/logo.png';

function Navbar() {
    return (
        <div className="container py-2 mx-auto">
            <div className="">
                <img src={logo} alt="logo" srcset="" />
            </div>
            <h2 className='text-center text-gray-600'> Hey is it centre</h2>
        </div>
    )
}

export default Navbar
