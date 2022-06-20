import React from "react";
import AboutInfo from "./about/AboutInfo";
import ContactMe from "./contact-me/ContactMe";
import "./ContactPage.scss";

const ContactPage = ({ closeContactForm, isModalOpen }) => {
  return (
    <div className={`about-contact` + (isModalOpen ? " is-contact-open" : "")}>
      <div className="about-contact__wrapper">
        <AboutInfo isModalOpen={isModalOpen} />
        <ContactMe
          isModalOpen={isModalOpen}
          closeContactForm={closeContactForm}
        />
      </div>
    </div>
  );
};

export default ContactPage;
