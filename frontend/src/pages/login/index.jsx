
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NavBar from '../../components/nav_bars/nav_bar';
import LoginContainer from '../../components/login';
import Footer from '../../components/footer';
import LoginForgetPassword from '../../components/login_forget_password'




const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useNavigate();
  const [forgetPassword, toggleforgetPassword] = useState(false);


  const registerButtonHandler = (event) => {
    event.preventDefault();
    registerUser({ email: email });
  };

  // register
  const registerUser = (data) => {
    const url = `registration/`;
    console.log("registration to be done")
  };


  return (
    <>
    <NavBar/>
    {forgetPassword ? <LoginForgetPassword /> : <LoginContainer toggleforgetPassword={toggleforgetPassword}/>}
    <Footer/>
    </>
  );
}

const mapStateToProps = (reduxState) => {
  return reduxState
}
export default connect(mapStateToProps)(Login);
