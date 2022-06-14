import React from "react";
import "./ContactMe.scss";
import { ContactMeForm } from "../../../components/forms/ContactMe/ContactMeForm";
import { ThemeContextConsumer } from "../../../utils/themeContext";

const ContactMe = ({ closeContactForm }) => {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div
          className={`half-contact half-contact_contact half-contact_${context.theme}`}
        >
          <div className="half-contact__wrapper">
            <span
              className={`contact-form__close-btn contact-form__close-btn_${context.theme}`}
              onClick={() => closeContactForm()}
            >
              Close
            </span>
            <h2 className="contact-form__title">Talk to me.</h2>
            <h4 className="contact-form__subtitle">
              Here you can contact me.
            </h4>
            <ContactMeForm />
          </div>
        </div>
      )}
    </ThemeContextConsumer>
  );
};

export default ContactMe;
