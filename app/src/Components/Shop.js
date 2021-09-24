import React from "react";
import product from "../pics/Pack.png";
import ShopBtn from "./ShopBtn";

function Shop({ setModel }) {
  return (
    <div className=" flex sm:container sm:mx-auto mx-2  rounded-xl sm:max-w-2xl xl:container sm:flex-row flex-col ">
      <div className="bg-textGreen  sm:w-6/12 sm:rounded-l-xl flex justify-center items-center sm:my-8 rounded-t-xl sm:rounded-t-none">
        <img
          src={product}
          alt="Chhop image packed inside container"
          className="sm:max-w-xs xl:max-w-xl "
        />
      </div>
      <div className="bg-white rounded-b-xl sm:rounded-b-none sm:w-6/12 sm:rounded-r-xl  flex items-center p-5 sm:p-0 sm:my-8">
        <div className="max-w-lg sm:ml-12">
          <p className="xl:text-7xl sm:text-4xl text-4xl leading-tight text-titleDark">
            HOMEMADE Timur ko chhop
          </p>
          <p className="font-script text-xl">made with love</p>
          <p>
            It is as easy as selecting one or more text layer(s) and running the
            plugin from the plugin's menu. Alternatively, you can also use the
            keyboard shortcut "Ctrl+Alt+L" on Windows
          </p>
          <ShopBtn setModel={setModel} />
        </div>
      </div>
    </div>
  );
}
export default Shop;
