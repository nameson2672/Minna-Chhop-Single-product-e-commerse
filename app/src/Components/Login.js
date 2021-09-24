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
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
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
      url: "http://localhost:4000/login",
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
  };

  return (
    <div
      ref={modelRef}
      onClick={closeModel}
      className="w-full min-h-full top-0 ring-0 grid  place-content-center z-50 backdrop-filter backdrop-blur-lg backdrop-brightness-50  fixed"
    >
      <animated.div style={animation}>
        <div className="bg-cardBg rounded-xl flex justify-center items-center flex-col text-center max-w-4xl px-20 py-10 ">
          <img src={logo} alt="logo minna choop" className="w-80 mt-16 " />
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
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
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
