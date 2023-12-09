import React from "react";
import "../Styles/contact.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Contact_form from "../Components/Contact_form.js";
function Contact(params) {
  return (
    <div className="contact-p">
      <Navbar></Navbar>
      <Contact_form></Contact_form>
      <Footer></Footer>
    </div>
  );
}
export default Contact;
