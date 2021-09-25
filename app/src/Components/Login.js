import { useState, useRef } from "react";
import logo from "../pics/logo.png";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "axios";
import { useSpring, animated } from "react-spring";

function Login({ loginModel, showModal, setUser, user }) {
  const [uid, setUid] = useState();
  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      loginModel(false);
    }
  };

  const animation = useSpring({
    
    from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0', transform:`translateY(-100%)`  },
    to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' ,transform:`translateY(0%)` },
    config: { duration: 300 },
  });


  const responseGooglePass = (data) => {
    console.log(data.profileObj);
    if (data) {
      setUser(data.profileObj);
    }
    const googleRes = data.profileObj;
    window.localStorage.setItem("name", googleRes.name);
    window.localStorage.setItem("imageUrl", googleRes.imageUrl);
    if (googleRes) {
      setUser(googleRes);
      loginModel(false);
    }
    axios({
      method: "post",
      url: "http://localhost:3000/login",
      data: googleRes,
    }).then((data) => {
      setUid(data.data.data._id);
      window.localStorage.setItem("uid", data.data.data._id);
    });
  };
  const logout = () => {
    window.localStorage.removeItem('name');
    window.localStorage.removeItem("imageUrl");
    window.localStorage.removeItem('uid')
    setUser(null);
    loginModel(false);
   }

  const responseGoogleFail = (data) => {
    console.log("Fail to login");
    console.log(data);
  };

  return (
    <div
      ref={modelRef}
      onClick={closeModel}
      className="w-full min-h-full top-0 ring-0 grid  place-content-center z-50 backdrop-filter backdrop-blur-lg backdrop-brightness-50  fixed"
    >
      <animated.div style={animation}>
        <div className="bg-cardBg rounded-xl flex justify-center items-center flex-col text-center max-w-4xl sm:px-20 sm:py-10 p-5 sm:p-0">
          <img
            src={logo}
            alt="logo minna choop"
            className="sm:w-80 sm:mt-16 w-40 "
          />
          <p>Join our family</p>
          <p className="text-4xl leading-tight text-titleDark">Homemade</p>
          <p className="text-textBlack  text-4xl">Timur ko chhop</p>
          <div className="py-16">
            {!user && (
              <GoogleLogin
                clientId="187213291535-p0j7bqtg5eoro1ftgrrq0sdlerukqleu.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGooglePass}
                onFailure={responseGoogleFail}
                isSignedIn={true}
                cookiePolicy={"single_host_origin"}
              />
            )}
            {user && (
              <GoogleLogout
                clientId="187213291535-p0j7bqtg5eoro1ftgrrq0sdlerukqleu.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
              />
            )}
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Login;
