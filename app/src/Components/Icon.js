import React from 'react'

function Icon({icon, text}) {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={icon} alt="icons to show services" className="sm:w-24 w-10 " />
            <p className='text-titleDark  '>{text}</p>
        </div>
    )
}

export default Icon
