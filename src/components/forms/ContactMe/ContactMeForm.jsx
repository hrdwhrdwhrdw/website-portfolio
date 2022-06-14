import React, { useState } from "react";
import "./ContactMeForm.scss";
import emailjs from "emailjs-com";
import { ThemeContextConsumer } from "../../../utils/themeContext";

export const ContactMeForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

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

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeMail = (e) => {
    setMail(e.target.value);
  };
  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className="contact__form">
          <form onSubmit={sendEmail}>
            <label>Name*</label>
            <div className="contact__input-wrapper">
              <input
                className="contact__input"
                type="text"
                name="name"
                placeholder="enter your name..."
                onChange={(e) => onChangeName(e)}
                value={name}
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
                onChange={(e) => onChangeMail(e)}
                value={mail}
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
                onChange={(e) => onChangeMessage(e)}
                value={message}
              />
              <span className="focus-border"></span>
            </div>
            <button
              className={`contact__button contact__button_${context.theme}`}
              type="submit"
              value="Send"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </ThemeContextConsumer>
  );
};
