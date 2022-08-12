import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';




const Google_Logout = () => {

  const dispatch = useDispatch();

  const clientId =
  '642358959940-8ajg6jcc3gekamat3qf5hus2c42n9gkk.apps.googleusercontent.com';
  
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    dispatch({type:"setGoogleObject",payload:{}});

  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Google_Logout;