import React from 'react'

function Icon({icon, text}) {
    return (
        <div>
            <img src={icon} alt="icons to show services" className="w-24 " />
            <p className='text-titleDark  '>{text}</p>
        </div>
    )
}

export default Icon
