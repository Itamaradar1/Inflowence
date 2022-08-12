import React from "react";
import Contact from "../../components/contact/contact_content";
import Footer from "../../components/footer";
import NavBar from "../../components/nav_bars/nav_bar";


const ContactPage = (props) => {
  return(
    <>

    <NavBar />
    <Contact/>
    <Footer />
    </>
  );
}

export default ContactPage;