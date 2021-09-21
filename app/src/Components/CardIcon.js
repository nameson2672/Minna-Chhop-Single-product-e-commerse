import React from 'react'

function CardIcon({icon, text, title}) {
    return (
        <div className='bg-cardBg w-96  relative rounded-lg p-4 grid place-items-center text-center py-10 px-2 mx-2.5'>
            <div className=" bg-iconBg rounded-full w-36 ">
                <img src={icon} alt="icons" className="w-36 rounded p-5" />
            </div>
            <div className=" text-textGreen  p-3">
                <h2 className="mb-10 text-3xl ">{title }</h2>
                <p>{text}</p>

            </div>
        </div>
    )
}

export default CardIcon;