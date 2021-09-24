import React from 'react'
import woner from '../pics/woner.jpg'

function AboutUs() {
    return (
      <div className="bg-bodyBg my-16 lg:max-w-2xl sm:my-8 sm:max-w-2xl sm:mx-auto xl:container ">
        <div className="bg-white rounded-md flex sm:flex-row flex-col mx-2 s:my-0 items-center sm:container sm:mx-auto">
          <div>
            <img
              src={woner}
              alt=""
              srcset=""
              className=" rounded-t-md sm:rounded-t-none  sm:rounded-tl-md sm:rounded-bl-md lg:max-w-xs sm:max-w-xs  xl:max-w-2xl "
            />
          </div>
          <div className="flex flex-col justify-start text-left text-textBlack px-6 w-full py-6">
            <h2 className="text-5xl mb-5">Mina Gaudel</h2>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur eum sit quia impedit sapiente, eaque consectetur
              officia rem fuga nulla molestias expedita necessitatibus aliquid.
              Error culpa placeat repudiandae sint minima.{" "}
            </p>
          </div>
        </div>
      </div>
    );
}

export default AboutUs
