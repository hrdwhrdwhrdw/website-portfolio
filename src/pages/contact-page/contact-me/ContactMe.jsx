import React from "react";
import "./ContactMe.scss";
import { ContactMeForm } from "../../../components/forms/ContactMe/ContactMeForm";

const ContactMe = ({closeContactForm}) => {
  return (
    <div className="half-contact half-contact_contact">
      <div className="half-contact__wrapper">
        <span className="contact-form__close-btn" onClick={() => closeContactForm()}>Close</span>
        <h2 className="contact-form__title">Talk to me.</h2>
        <h4 className="contact-form__subtitle">
          Here you can contact me, just write.
        </h4>
        <ContactMeForm />
      </div>
    </div>
  );
};

export default ContactMe;
