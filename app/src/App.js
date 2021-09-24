import "./App.css";
import { useState, useEffect } from "react";
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
import AboutUs from 'Components/AboutUs'
import ContactUs from "Components/ContactUs";

function App() {
  const [loginModelOpen, SetLoginModelOpen] = useState(false);
  const [shopModelOpen, setShopModelOpen] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const name = window.localStorage.getItem('name');
    const imageUrl = window.localStorage.getItem('imageUrl');
    if (name && imageUrl) {
      setUser({ name, imageUrl }); 
    }
  }, [])
  return (
    <div className="relative h-screen overflow-x-hidden">
      {loginModelOpen && (
        <Login
          loginModel={SetLoginModelOpen}
          showModal={loginModelOpen}
          setUser={setUser}
          user={user}
        />
      )}
      {shopModelOpen && <ShopModel setModel={setShopModelOpen} user={user} />}
      <div className="bg-bodyBg grad-hero-bg relative min-h-screen">
        <Navbar
          user={user}
          className="  top-0 "
          loginModel={SetLoginModelOpen}
          shopModal={setShopModelOpen}
        />
        <div className="container mx-auto grid content-center grid-cols-2  text-textBlack  text-left mt-16 ">
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
              className=" max-w-4xl"
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
        <AboutUs />
        <ContactUs />
        <Icons />
        <Footer />
      </div>
    </div>
  );
}

export default App;
