
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NavBar from "../../components/nav_bars/nav_bar";
import Footer from '../../components/footer';
import BookADemoContainer from "../../components/demo/book_a_demo"



const BookADemo = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useNavigate();

  return (
    <>
    <NavBar/>
    <BookADemoContainer/>
    <Footer />
    </>

  );
}

export default connect()(BookADemo);
