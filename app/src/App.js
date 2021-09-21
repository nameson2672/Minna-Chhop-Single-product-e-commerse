
import './App.css';
import { Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { useState } from 'react';
import CheckoutComponent from './checkout.js';

// Component import
import Navbar from './Components/Navbar';
import HeroImg from './pics/HeroImg.png';
import ShopBtn from './Components/ShopBtn';
import CardIcons from './Components/CardIcons';
import Shop from './Components/Shop'
import Icons from './Components/Icons';


function App() {
  const [user, setUser] = useState();
  const [uid, setUid] = useState();
  
  const responseGooglePass = (data) => {
    console.log(data.profileObj);
    if (data) {
      setUser(data.profileObj);
    
    }
    const googleRes = data.profileObj;
    axios({
      method: 'post',
      url: 'http://localhost:4000/login',
      data: googleRes,
    }).then(data => {
      setUid(data.data.data._id);
      
    });

  }
  console.log(user);
  const responseGoogleFail = (data) => {
    console.log(data);
  }
  return (
    <div className="bg-bodyBg">
      
      <div className='grad-hero-bg relative min-h-screen z-10'>
        <Navbar className=" z-50  top-0 " />
          <div className=' container mx-auto grid content-center grid-cols-2  text-textBlack  text-left mt-16'>
            <div className='max-w-lg font-display z-20 mt-56 '>
              <p className="text-4xl px-1">Premium Food Product</p>
            <p className="text-7xl leading-tight text-titleDark">HOMEMADE Timur ko chhop</p>
            <p className="font-script text-xl">made with love</p>
             <ShopBtn />
            </div>
            <div className="z-20 mt-32">
              <img src={HeroImg} alt="Chhop image packed" className=' max-w-4xl   '/>
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
            <div className="container mx-auto my-24    ">
            <CardIcons />
      </div>
      <Shop />
      <Icons />
      
    </div>
    
  );
}

export default App;
