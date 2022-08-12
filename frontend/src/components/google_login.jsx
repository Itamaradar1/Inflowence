import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { GoogleLogin } from 'react-google-login';
// refresh token



const Google_Login = (props) => {
  const dispatch = useDispatch();
  const clientId =
  '642358959940-8ajg6jcc3gekamat3qf5hus2c42n9gkk.apps.googleusercontent.com';

  const onSuccess = (res) => {
    console.log('Login Success: currentUser: ', res);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍.`
    );
    dispatch({type:"setGoogleObject",payload:res});
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please contact the admin of the website if the problem persist.`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Google_Login;