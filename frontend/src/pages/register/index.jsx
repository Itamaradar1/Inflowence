
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NavBar from '../../components/nav_bars/nav_bar';
import RegisterContainer from '../../components/registration/register';
import Footer from '../../components/footer';
import RegisterThankYou from '../../components/registration/register_thank_you';





const Register = () => {
  const [registered, toggleRegister] = useState(false);
  const navigate = useNavigate();

  console.log("Register")

  return (
    <>
    <NavBar/>
    { registered ? <RegisterThankYou/> : <RegisterContainer toggleRegister={toggleRegister}/>}
    <Footer/>
    </>
  );
}

export default connect()(Register);
