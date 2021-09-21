import React from 'react'
import product from '../pics/Pack.png'
import ShopBtn from './ShopBtn';

function Shop() {
    return (
        <div className=' flex container mx-auto  rounded-xl '>
            <div className='bg-textGreen  w-6/12 rounded-l-xl flex justify-center items-center my-8'>
                <img src={product} alt="Chhop image packed inside container" />
            </div>
            <div className="bg-white  w-6/12 rounded-r-xl flex items-center my-8">
                <div className="max-w-lg ml-12">
                    <p className="text-7xl leading-tight text-titleDark">HOMEMADE Timur ko chhop</p>
                    <p className="font-script text-xl">made with love</p>
                    <p>It is as easy as selecting one or more text layer(s) and running the plugin from the plugin's menu. Alternatively, you can also use the keyboard shortcut "Ctrl+Alt+L" on Windows</p>
                    <ShopBtn />
                    
            </div>
            </div>
        </div>
    )
}
export default Shop
