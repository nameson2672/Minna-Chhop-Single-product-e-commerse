import React from 'react'
import truck from '../pics/truck.png';
import Hours from '../pics/online.png';
import box from '../pics/box.png';
 
import Icon from './Icon'

function Icons() {
    const infos = [{
        icon: truck,
        text:'Fast Delivery'
    }, {
        icon: Hours,
        text:'Online Shop'
        }, {
        icon: box,
        text:'Grate Value'
    }]
    return (
        <div className=' bg-white mt-16 '>
            <div className='container flex justify-around items-center py-20   mx-auto'>
                {infos.map(item => <Icon icon={item.icon} text={item.text} />)}
            </div>
            
        </div>
    )
}

export default Icons
