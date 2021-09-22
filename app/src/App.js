import "./App.css";
import { useState } from "react";
import CheckoutComponent from "./checkout.js";

// Component import
import Navbar from "./Components/Navbar";
import HeroImg from "./pics/HeroImg.png";
import ShopBtn from "./Components/ShopBtn";
import CardIcons from "./Components/CardIcons";
import Shop from "./Components/Shop";
import Icons from "./Components/Icons";
import Footer from "Components/Footer";
import Login from "./Components/Login";
import ShopModel from "Components/ShopModel";

function App() {
  const [loginModelOpen, SetLoginModelOpen] = useState(false);
  const [shopModelOpen, setShopModelOpen] = useState(false);
  const user = {
    avtar :"https://lh3.googleusercontent.com/a-/AOh14GiNETS2iWi2xVRMTe3lsNOZeEL4YUspRHOd7xTz=s96-c",
    name : "Nameson Gaudel"
  }

  return (
    <div className="relative h-screen">
      {loginModelOpen && (
        <Login loginModel={SetLoginModelOpen} showModal={loginModelOpen} />
      )}
      {shopModelOpen && <ShopModel setModel={setShopModelOpen} />}

      <div className="bg-bodyBg grad-hero-bg relative min-h-screen">
        <Navbar
          user={user}
          className=" z-50  top-0 "
          loginModel={SetLoginModelOpen}
          shopModal={setShopModelOpen}
        />
        <div className="container mx-auto grid content-center grid-cols-2  text-textBlack  text-left mt-16">
          <div className="max-w-lg font-display mt-56 ">
            <p className="text-4xl px-1">Premium Food Product</p>
            <p className="text-7xl leading-tight text-titleDark">
              HOMEMADE Timur ko chhop
            </p>
            <p className="font-script text-xl">made with love</p>
            <ShopBtn setModel={setShopModelOpen} />
          </div>
          <div className="mt-32">
            <img
              src={HeroImg}
              alt="Chhop image packed"
              className=" max-w-4xl   "
            />
          </div>
        </div>

        {/* <GoogleLogin
            clientId="187213291535-p0j7bqtg5eoro1ftgrrq0sdlerukqleu.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGooglePass}
            onFailure={responseGoogleFail}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
        /> */}
      </div>

      <div className="bg-bodyBg">
        <div className="container mx-auto py-24">
          <CardIcons />
        </div>
        <Shop setModel={setShopModelOpen} />
        <Icons />
        <Footer />
      </div>
    </div>
  );
}

export default App;
