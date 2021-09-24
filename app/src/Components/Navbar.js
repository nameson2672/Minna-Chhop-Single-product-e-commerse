import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import logo from "../pics/logo.png";
import {GoogleLogout} from 'react-google-login'

function Navbar({ loginModel, shopModal, user }) {
  const showLoginModel = () => {
    loginModel(true);
  };
  const showShopModel = () => {
    shopModal(true);
  };

  return (
    <div className="z-50">
      <div className="container mx-auto flex justify-between items-center h-28 ">
        <div>
          <img src={logo} alt="logo" srcset="" className=" w-64 px-6" />
        </div>
        {user && (
          <div className="flex justify-center items-center flex-col">
            <img
              src={user.imageUrl}
              alt="user image"
              className="w-12 rounded-full"
            />
            <h3>{user.name}</h3>
          </div>
        )}
        <div className=" text-textBlack font-normal text-sm font-display">
          <Router>
            <ul className=" flex justify-between px-4">
              <li className=" px-6 mx-1.5 ">
                <p className="cursor-pointer" onClick={showShopModel}>
                  SHOP
                </p>
              </li>
              <li className=" px-6 mx-1.5">
                <p className="cursor-pointer">ABOUTUS</p>
              </li>
              <li className=" px-6 mx-1.5">
                <p className="cursor-pointer">CONTACT</p>
              </li>
              {!user && (
                <li className=" px-6 mx-1.5" onClick={showLoginModel}>
                  <p className="cursor-pointer">JOIN</p>
                </li>
              )}
              {user && (
                <li className=" px-6 mx-1.5" onClick={showLoginModel}>
                  <p className="cursor-pointer uppercase">Logout</p>
                </li>
              )}
            </ul>
          </Router>
        </div>
      </div>
      <div className="container mx-auto h-0.5 bg-gray-600"></div>
    </div>
  );
}

export default Navbar;
