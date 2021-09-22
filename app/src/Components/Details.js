import React from "react";

function Details({ avtar, name }) {
  return (
    <div className="col-span-3 bg-shopLight p-9 px-8 rounded-t rounded-b  flex justify-center items-center flex-col text-center">
      <div className="flex  justify-center items-center flex-col text-center w-60">
        <img src={avtar} alt="User image" className="rounded-full" />
        <p className="text-xl">{name}</p>
      </div>
      <div className="h-0.5 bg-textGreen w-full mb-2"></div>
      <div className="text-left">
        <div className="mt-4">
          <p className="text-base text-titleDark">Phone Number</p>
          <input
            type="text"
            name="Phone number"
            className="border-none outline-none px-3 w-64 py-2  rounded-sm  "
          />
        </div>
        <div className="mt-4">
          <p className="text-base text-titleDark">Adress Details</p>
          <textarea
            type="text"
            name="Infroramtion"
            className="border-none outline-none px-3 w-96 h-24 overflow-hidden py-2  rounded-sm"
          />
        </div>

        <button className="bg-textGreen text-white hover:bg-btnBlue text-xl px-28 py-2 mt-4 rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Details;
