
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NavBar from "../../components/nav_bars/nav_bar";
import Footer from '../../components/footer';
import BookADemoThankYouContainer from "../../components/demo/book_a_demo_thank_you"



const BookADemoThankYou = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useNavigate();

  return (
    <>
    <NavBar/>
    <BookADemoThankYouContainer/>
    <Footer />
    </>

  );
}

export default connect()(BookADemoThankYou);
