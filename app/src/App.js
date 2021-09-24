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
          className=" top-0 "
          loginModel={SetLoginModelOpen}
          shopModal={setShopModelOpen}
        />
        <div className="container   2xl:mx-auto 2xl:grid 2xl:content-center grid-cols-2  text-textBlack  2xl:text-left xl:grid xl:content-center xl:grid-cols-2  xl:mx-auto lg:flex lg:flex-col lg:justify-center lg:items-center sm:flex sm:flex-col sm:justify-center sm:items-center mt-12 flex justify-center items-center flex-col">
          <div className="2xl:max-w-lg font-display  xl:max-w-md xl:mt-32 xl:ml-8 lg:max-w-md lg:text-center lg:flex lg:flex-col lg:justify-center lg:items-center lg:mt-20 sm:max-w-sm sm:text-center sm:flex sm:flex-col sm:justify-center sm:items-center sm:mt-24 xl:text-left xl:block   ">
            <p className="2xl:text-4xl xl:px-1 xl:text-4xl lg:text-4xl sm:text-2xl">
              Premium Food Product
            </p>
            <p className="2xl:text-7xl leading-tight text-titleDark xl:text-7xl lg:text-7xl sm:text-5xl">
              HOMEMADE Timur ko chhop
            </p>
            <p className="font-script text-xl">made with love</p>
            <ShopBtn setModel={setShopModelOpen} />
          </div>
          <div className=" xl:mt-48 lg:mt-40 sm:mt-40">
            <img
              src={HeroImg}
              alt="Chhop image packed"
              className=" 2xl:max-w-4xl xl:max-w-2xl lg:max-w-4xl sm:max-w-xl"
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
        <div className="container mx-auto sm:py-24">
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
