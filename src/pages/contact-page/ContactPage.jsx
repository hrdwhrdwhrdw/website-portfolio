import React from "react";
import AboutInfo from "./about/AboutInfo";
import ContactMe from "./contact-me/ContactMe";
import "./ContactPage.scss";

const ContactPage = ({closeContactForm}) => {
  return (
    <div className="about-contact">
      <div className="about-contact__wrapper">
        <AboutInfo />
        <ContactMe closeContactForm={closeContactForm}/>
      </div>
    </div>
  );
};

export default ContactPage;
