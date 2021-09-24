import React from 'react'
import woner from '../pics/woner.jpg'

function AboutUs() {
    return (<div className="bg-bodyBg my-16">
        
            <div className="bg-white rounded-md flex items-center container mx-auto">
                <div>
                    <img src={woner} alt="" srcset="" className=" max-w-3xl  rounded-tl-md rounded-bl-md"/>
                </div>
                <div className="flex flex-col justify-start text-left text-textBlack px-6 w-full">
                    <h2 className="text-5xl mb-5">Mina Gaudel</h2>
                    <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eum sit quia impedit sapiente, eaque consectetur officia rem fuga nulla molestias expedita necessitatibus aliquid. Error culpa placeat repudiandae sint minima. </p>
                </div>
        
            </div>
    </div>
    )
}

export default AboutUs
