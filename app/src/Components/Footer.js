import React from 'react'
import WhiteLog from '../pics/whiteLogo.png';

function Footer() {
    return (
        <div className=" bg-textBlack">
            <div className='container flex justify-center items-center flex-col mx-auto '>
                <img src={WhiteLog} alt="logo of minna chhop" className="w-80   " />
                <div className="text-footerText text-4xl ">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram mx-6 "></i>
                    <i class="fab fa-twitter"></i>
                </div>
                <p className="text-footerText text-lg my-6 sm:mx-0 mx-4 text-center">Healthy, Quality, Tasty and Love in your house</p>
            </div>
            <div className="bg-textGreen h-0.5"></div>
            <p className="py-6 container text-center text-footerText text-lg mx-auto">Copyright 2021 | Minna Chhop</p>
        </div>
    )
}

export default Footer
