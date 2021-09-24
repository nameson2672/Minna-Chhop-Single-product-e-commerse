import React from 'react'

function CardIcon({icon, text, title}) {
    return (
        <div className='bg-cardBg sm:w-96  relative rounded-lg sm:p-4 grid place-items-center text-center py-10 px-2 mx-2.5 my-2 sm:my-0'>
            <div className=" bg-iconBg rounded-full sm:w-36 w-24 ">
                <img src={icon} alt="icons" className="w-36 rounded sm:p-5 p-2" />
            </div>
            <div className=" text-textGreen  p-3">
                <h2 className="sm:mb-10 sm:text-3xl mb-5 text-2xl ">{title }</h2>
                <p>{text}</p>

            </div>
        </div>
    )
}

export default CardIcon;