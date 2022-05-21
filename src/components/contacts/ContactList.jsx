import React from "react";
import { NavLink } from "react-router-dom";
import "./ContactList.scss";
import { ReactComponent as Twitter } from "../../assets/contacts-icons/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/contacts-icons/facebook.svg";
import { ReactComponent as Instargram } from "../../assets/contacts-icons/instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/contacts-icons/linkedin.svg";
import { ReactComponent as Github } from "../../assets/contacts-icons/github.svg";

const ContactList = () => {
  return (
    <ul className="contacts__list">
      <li className="contacts__item contact__item_twitter">
        <NavLink className="contact__link" to="#">
          <Twitter className="contact__icon" />
        </NavLink>
      </li>
      <li className="contacts__item contact__item_facebook">
        <NavLink className="contact__link" to="#">
          <Facebook />
        </NavLink>
      </li>
      <li className="contacts__item contact__item_instagram">
        <NavLink className="contact__link" to="#">
          <Instargram />
        </NavLink>
      </li>
      <li className="contacts__item contact__item_linkedin">
        <NavLink className="contact__link" to="#">
          <LinkedIn />
        </NavLink>
      </li>
      <li className="contacts__item contact__item_github">
        <NavLink className="contact__link" to="#">
          <Github />
        </NavLink>
      </li>
    </ul>
  );
};

export default ContactList;
