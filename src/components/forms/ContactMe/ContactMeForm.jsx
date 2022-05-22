import React, { useRef } from "react";
import "./ContactMeForm.scss";
import emailjs from "emailjs-com";

export const ContactMeForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tbmaq03",
        "template_kodoqon",
        e.target,
        "UEqgnYI0tzVL73xhv"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="contact__form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name*</label>
        <div className="contact__input-wrapper">
          <input
            className="contact__input"
            type="text"
            name="name"
            placeholder="enter your name..."
          />
          <span className="focus-border"></span>
        </div>
        <label>Email*</label>
        <div className="contact__input-wrapper">
          <input
            className="contact__input"
            type="email"
            name="user_email"
            placeholder="enter your email..."
          />
          <span className="focus-border"></span>
        </div>
        <label>Message*</label>
        <div className="contact__input-wrapper">
          <textarea
            className="contact__input"
            rows="1"
            name="message"
            placeholder="enter your message..."
          />
          <span className="focus-border"></span>
        </div>

        <button className="contact__button" type="submit" value="Send">
          Send
        </button>
      </form>
    </div>
  );
};
