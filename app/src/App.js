import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { useState } from 'react';
import CheckoutComponent from './checkout.js';

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
    <div className="App">
      <h2>APP is Running</h2>
          <GoogleLogin
            clientId="187213291535-p0j7bqtg5eoro1ftgrrq0sdlerukqleu.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGooglePass}
            onFailure={responseGoogleFail}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
        />
        {/* <CheckoutComponent uid={uid}/> */}
    </div>
  );
}

export default App;
